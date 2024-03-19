import React from 'react';
import '../styles/header.css'


class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <span className="header-item">株式会社ブライトスター</span>
                <h1 className="header-item system-name">社内統合管理システム</h1>
                <img src='/assets/logo.png' alt='Company Logo' className='header-item company-logo' />
            </header>

        );
    }
}

export default Header;