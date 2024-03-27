import React, {useContext, useEffect, useState} from "react";
import FeatureButton from "./FeatureButton";
import EmployeeInfoManagementFeature from "./EmployeeInfoManagementFeature";
import BusinessInfoManagementFeature from "./EmployeeInfoManagementFeature";
import Header from "./Header";
import {UserContext} from '../utils/UserContext';
import '../styles/featuresPage.css'
import { useNavigate } from "react-router-dom";


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
    { title: '社員情報管理', permissionRequired: ['S', 'A', 'D'], className: 'orange'},
    { title: 'システム設定', permissionRequired: ['S'], className: 'orange'},
    { title: 'ユーザ管理', permissionRequired: ['S'], className: 'orange'},
]

const FeaturesPage = () => {
    // 获取属性
    const { userAuth, setUserAuth } = useContext(UserContext)!;
    const navigate = useNavigate();
    const userRole = userAuth.userRole || 'defaultRole';
    const loginTime = userAuth.loginTime;
    const userName = userAuth.userName;

    // 保存用户信息，防止刷新丢失
    useEffect(() => {
        const storedUserAuth = localStorage.getItem('userAuth');
        if (storedUserAuth) {
            setUserAuth(JSON.parse(storedUserAuth));
        }
    }, []);


    // 定义activeFeature，跟踪当前选中的功能
    const [activeFeatureTitle, setActiveFeatureTitle] = useState<string | null>(null);

    const [activeButton, setActiveButton] = useState<string | null>(null);
    const handleClick = (title: string) => {
        // 如果点击的是当前激活的按钮，则不进行任何操作
        if (title === activeButton) {
            return;
        }
        setActiveButton(title);
        setActiveFeatureTitle(title);
    }
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
                        onClick={() => handleClick(config.title)}
                        isActive = {config.title === activeButton}
                        navigate={navigate} // 传递navigate函数
                    />
                ))}
            </div>
            {activeFeatureTitle === '社員情報管理' && <EmployeeInfoManagementFeature />}
            {activeFeatureTitle === '営業先情報管理' && <BusinessInfoManagementFeature />}

        </div>

    );
    
}

export default FeaturesPage;