import React from 'react';
import UserInfo from './UserInfo'
import '../styles/header.css'
import { useNavigate } from 'react-router-dom';


type HeaderProps = {
    loginTime?: string;
    userName?: string;
    userRole?: string;
    onLogout: () => void;
}

class Header extends React.Component<HeaderProps> {

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
                        onLogout={this.props.onLogout}
                    />
                    </div>
                )}
            </header>


        );
    }
}

function HeaderWithNavigation(props:Omit<HeaderProps, 'onLogout'>) {
    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.removeItem('userAuth');
        navigate('/', {replace: true})
    }
    return <Header {...props} onLogout={onLogout} />
}

export default HeaderWithNavigation;