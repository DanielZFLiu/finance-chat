import React, { useEffect, useState } from 'react';
import { Tree, TreeNode } from '@/lib/tree';
import './ChatView.css';
import { prompt } from '@/lib/pipeline';
import Message from './Message';
import Loader from './Loader/Loader';
import SideMenu from './SideMenu/SideMenu';

interface ChatViewProps {
    tree: Tree;
    id: string;
    setId: (newId: string) => void;
    setView: (view: string) => void;
}

const ChatView: React.FC<ChatViewProps> = ({ tree, id, setId, setView }) => {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<TreeNode[]>([]);
    const [progress, setProgress] = useState("");
    const [openAiModel, setOpenAiModel] = useState("gpt-4o");

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

            if(trimmed === "\\model o3-mini") {
                setOpenAiModel("o3-mini");
                return;
            }
            else if(trimmed === "\\model gpt-4o") {
                setOpenAiModel("gpt-4o");
                return;
            }

            try {
                // add user prompt
                const formerId = id;
                const userNode = tree.addNode(id, trimmed);
                setId(userNode.id);

                // get response
                const assistantResponse = await prompt(trimmed, setProgress, openAiModel, undefined, tree.getMessages(formerId));
                const assistantNode = tree.addNode(userNode.id, assistantResponse);
                setId(assistantNode.id);
            } catch (error) {
                console.error("Error processing prompt:", error);
            }
        }
    };

    async function handleMenu(choice: string) {
        if (choice === "tree") {
            console.log("tree");
            setView("tree");
        } else if (choice === "save") {
            console.log("save");
            await tree.saveTree();
        } else if (choice === "delete") {
            console.log("delete");
            await tree.deleteTree();
        }
    }

    return (
        <div className="chat-container">
            {progress !== "" && <Loader loadingText={progress} />}

            <SideMenu handleMenu={handleMenu} />

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
