import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">NYT React App</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/saved">Saved Articles</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;