import React from "react";
import { useScoreContext } from "../utils/Context";

function Nav() {
    const [state] = useScoreContext();

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <ul className="navbar-nav nav-fill w-100">
                <li className="nav-item">
                   <h2>Clicky Game~!</h2>
                </li>
                <li className="nav-item">
                  <p style={{"fontSize": "20px"}}>Click an image to earn points, but don't click an image more than once!</p>
                </li>
                <li className="nav-item">
                    <p style={{"fontSize": "20px"}}><strong>Score</strong>: {state.score} | <strong>Total</strong>: {state.total}</p>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;