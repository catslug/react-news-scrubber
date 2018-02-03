import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper lime accent-2">
                    <a style={Style.logo} href="/" className="brand-logo">Scraper of Times</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><i style={Style.icon} className="material-icons">save</i></li>
                        <li><a style={Style.text} href="/saved">Saved Articles</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const Style = {
    logo: {
        color: 'black',
        marginLeft: '15px',
        marginRight: '15px',
        letterSpacing: '3px',
    },
    text: {
        color: 'black',
        marginRight: '15px',
        letterSpacing: '1px',
    },
    icon: {
        color: 'black'
    }
}

export default Navbar;