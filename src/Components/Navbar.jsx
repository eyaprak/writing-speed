import React from 'react'

import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../Contexts/ThemeContext';

class Navbar extends React.Component {
    static contextType = ThemeContext
    render() {
        const theme = this.context.getTheme();
        const isDark = this.context.isDarkTheme;
        return (
            <nav className={`navbar navbar-expand-lg ${theme.navbar} rounded mb-2`}>
                <NavLink className="navbar-brand p-2" to="/">WritingSpeedTest</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav navbar-center">
                        <li className="nav-item active">
                            <NavLink exact className="nav-link" to="/">Homepage</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/results">Results</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/texts">Texts</NavLink>
                        </li>
                    </ul>
                </div>
                <button type="button" className={`${theme.toogleButton} mr-1`} onClick={this.context.changeTheme}>{isDark ? <span>Light Theme <i class="far fa-lightbulb"></i></span> : <span>Dark Theme <i class="fas fa-lightbulb"></i></span>}</button>
            </nav>
        );
    }
}

export default Navbar;