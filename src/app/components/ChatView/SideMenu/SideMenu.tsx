import React from 'react';
import './SideMenu.css';

import Caret from './CaretSvg';
import Tree from './TreeSvg';
import Save from './SaveSvg';
import Trash from './TrashSvg';

interface SideMenuProps {
    handleMenu: (choice: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ handleMenu }) => {
    /**
     * smooth scroll to the top of the page
     */
    function scrollUp() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /**
     * smooth scroll to the bottom of the page
     */
    function scrollDown() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }


    return (
        <div className="side-menu">
            <button className="side-menu-button" onClick={scrollUp}>
                <Caret up={true} />
                <span className="side-menu-tooltip">Scroll Up</span>
            </button>
            <button className="side-menu-button" onClick={() => handleMenu("tree")}>
                <Tree />
                <span className="side-menu-tooltip">Tree View</span>
            </button>
            <button className="side-menu-button" onClick={() => handleMenu("save")}>
                <Save />
                <span className="side-menu-tooltip">Save Locally</span>
            </button>
            <button className="side-menu-button" onClick={() => handleMenu("delete")}>
                <Trash />
                <span className="side-menu-tooltip">Delete Local Data</span>
            </button>
            <button className="side-menu-button" onClick={scrollDown}>
                <Caret up={false} />
                <span className="side-menu-tooltip">Scroll Down</span>
            </button>
        </div>
    );
};

export default SideMenu;
