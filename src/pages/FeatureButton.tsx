import React from "react";
import '../styles/featuresPage.css'
interface FeatureButtonProps {
    title: string;
    permissionRequired: string[];
    userRole: string;
    className: string;
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
        const { title, className } = this.props;
        const buttonClass = `feature-button`;
        const colorBarClass = `color-bar ${className}`;

        return (
            <div className="feature-button-container">
                <div className={colorBarClass}></div>
                <button className={buttonClass}>
                    {title}
                </button>
            </div>
        );
    }
}

export default FeatureButton;