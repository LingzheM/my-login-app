import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const message = location.state?.message || 'An unexpected error occurred';
    const handleBackToLogin = () => {
        navigate('/');
    }
    return (
        <div>
            <h1>Error</h1>
            <p>{message}</p>
            <button onClick={handleBackToLogin}>登録画面</button>
        </div>
    );
};

export default ErrorPage;