import React from "react";
import '../styles/userInfo.css'

type UserInfoProps = {
    loginTime: string;
    userName: string;
    userRole: string;
    onLogout: () => void;
}

class UserInfo extends React.Component<UserInfoProps> {

    render() {
        const { loginTime, userName, userRole, onLogout } = this.props;
        return (
            <div className="user-info-row">
                <div className="user-info-left">
                <span>登录时间: {loginTime}</span>
                </div>
                <div className="user-info-right">
                <span>ユーザ名: {userName}</span>
                <span>権限: {userRole}</span>
                <button onClick={onLogout}>ログアウト</button>
                </div>
            </div>
        );
    }
}

export default UserInfo;