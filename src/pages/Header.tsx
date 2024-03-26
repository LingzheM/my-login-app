import React from 'react';
import UserInfo from './UserInfo'
import '../styles/header.css'

type HeaderProps = {
    loginTime?: string;
    userName?: string;
    userRole?: string;
}

class Header extends React.Component<HeaderProps> {
    handleLogout = () => {

    }
    render() {
        const {loginTime, userName, userRole} = this.props;
        return (
            <header className="header">
                <div className="header-top-row">
                    <span className="header-item">
                        株式会社ブライトスター<br/>
                        BRIGHT STAR CO.LTD.    
                    </span>
                    <h1 className="system-name">社内統合管理システム</h1>
                    <img src='/assets/logo.png' alt='Company Logo' className='header-item company-logo' />
                </div>
                {loginTime && userName && userRole && (
                    <div className="user-info-row">
                    <UserInfo
                        loginTime={loginTime}
                        userName={userName}
                        userRole={userRole} 
                        onLogout={this.handleLogout}
                    />
                    </div>
                )}
            </header>


        );
    }
}

export default Header;