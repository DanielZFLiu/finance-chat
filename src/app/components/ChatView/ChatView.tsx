import React, { useEffect, useState } from 'react';
import { Tree, TreeNode } from '@/lib/tree';
import './ChatView.css';
import { prompt } from '@/lib/pipeline';
import Message from './Message';
import Loader from './Loader/Loader';

interface ChatViewProps {
    tree: Tree;
    id: string;
    setId: (newId: string) => void;
}

const ChatView: React.FC<ChatViewProps> = ({ tree, id, setId }) => {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<TreeNode[]>([]);
    const [progress, setProgress] = useState("");

    useEffect(() => {
        if (id === "") return;
        setMessages(tree.getBranch(id));
    }, [id]);

    const handleKeyDown = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        // submit prompt on enter
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            const trimmed = inputValue.trim();
            if (trimmed === "") return;
            setInputValue("");

            try {
                // add user prompt
                const formerId = id;
                const userNode = tree.addNode(id, trimmed);
                setId(userNode.id);

                // get response
                const assistantResponse = await prompt(trimmed, setProgress, undefined, undefined, tree.getMessages(formerId));
                const assistantNode = tree.addNode(userNode.id, assistantResponse);
                setId(assistantNode.id);
            } catch (error) {
                console.error("Error processing prompt:", error);
            }
        }
    };

    return (
        <div className="chat-container">
            {progress !== "" && <Loader loadingText={progress} />}

            <div className="chat-messages">
                {messages.map((message) => (
                    message.role !== "developer" && (
                        <div key={message.id} className="chat-message">
                            <div className="message-role">{message.role}</div>
                            <Message content={message.content} />
                        </div>
                    )
                ))}
            </div>
            <textarea
                className="chat-input"
                placeholder="Enter your prompt here. Enter to submit, Shift+Enter for newline."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default ChatView;
