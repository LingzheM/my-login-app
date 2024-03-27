import React from "react";
import '../styles/featuresPage.css'
import { Navigate } from "react-router-dom";
interface FeatureButtonProps {
    title: string;
    permissionRequired: string[];
    userRole: string;
    className: string;
    onClick: () => void; // 添加点击处理函数
    isActive: boolean; // 表示按钮是否激活
    navigate: (path: string) => void;
}

interface FeatureButtonState {

}

class FeatureButton extends React.Component<FeatureButtonProps, FeatureButtonState> {
    hasAccess(): boolean {
        return this.props.permissionRequired.includes(this.props.userRole);
    }

    render() {
        if (!this.hasAccess()) {
            return null;
        }
        const { title, onClick, isActive, className } = this.props;
        const buttonClass = `feature-button`;
        const colorBarClass = `color-bar ${className}`;
        const buttonStyle = isActive ? { backgroundColor: 'red' } : {};
        return (
            <div className="feature-button-container">
                <div className={colorBarClass}></div>
                <button onClick={onClick} style={buttonStyle} className={buttonClass}>
                    {title}
                </button>
            </div>
        );
    }
}

export default FeatureButton;