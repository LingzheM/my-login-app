import React, {useContext} from "react";
import FeatureButton from "./FeatureButton";
import Header from "./Header";
import {UserContext} from '../utils/UserContext';
import '../styles/featuresPage.css'

const featuresConfig = [
    { title: '作業催促', permissionRequired: ['S', 'A', 'B', 'C', 'D'], className: 'blue'},
    { title: '受注管理', permissionRequired: ['S', 'A', 'B'], className: 'blue'},
    { title: '外注管理', permissionRequired: ['S', 'A', 'B'], className: 'blue'},
    { title: '請求作成', permissionRequired: ['S', 'A', 'C'], className: 'blue'},
    { title: '見積作成', permissionRequired: ['S', 'A', 'C'], className: 'blue'},
    { title: '各書類作成', permissionRequired: ['S', 'A', 'B', 'C', 'D'], className: 'blue'},
    { title: '経費管理', permissionRequired: ['S', 'A'], className: 'blue'},
    { title: '営業状況管理', permissionRequired: ['S', 'A', 'B'], className: 'blue'},
    { title: '取引先情報管理', permissionRequired: ['S', 'A', 'D'], className: 'green'},
    { title: '営業先情報管理', permissionRequired: ['S', 'A', 'B'], className: 'green'},
    { title: '社員情報管理', permissionRequired: ['S', 'A', 'D'], className: 'red'},
    { title: 'システム設定', permissionRequired: ['S'], className: 'orange'},
    { title: 'ユーザ管理', permissionRequired: ['S'], className: 'orange'},
]

const FeaturesPage = () => {
    const { userAuth } = useContext(UserContext)!;
    const userRole = userAuth.userRole || 'defaultRole';
    const loginTime = userAuth.loginTime;
    const userName = userAuth.userName;
    return (
        <div>
            <Header 
                loginTime={loginTime}
                userName={userName}
                userRole={userRole}/>
            <div className="features-container">
                {featuresConfig.map((config, index) => (
                    <FeatureButton
                        key={index}
                        title={config.title}
                        permissionRequired={config.permissionRequired}
                        userRole={userRole}
                        className={config.className} // 确保传递 className
                    />
                ))}
            </div>
        </div>

    );
    
}

export default FeaturesPage;