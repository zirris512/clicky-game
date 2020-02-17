import React from "react";
import { useScoreContext } from "../utils/Context";

function Nav() {
    const [state] = useScoreContext();

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <ul className="navbar-nav nav-fill w-100">
                <li className="nav-item">
                    <a className="nav-link" href="/"><h2>Clicky Game</h2></a>
                </li>
                <li className="nav-item">
                    Click an Image to Begin
                </li>
                <li className="nav-item">
                    <p>Score: {state.score} | Total: {state.total}</p>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;