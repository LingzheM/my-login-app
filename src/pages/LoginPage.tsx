import React from 'react';
import '../styles/login.css';
import Header from './Header';
import axios, { AxiosError } from 'axios';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useUser } from '../utils/UserContext';

interface LoginPageProps {
    navigate: NavigateFunction;
    onLoginSuccess: (userInfo: any) => void;
}

interface State {
    loginId: string;
    password: string;
    errorMessage: string;
}


class LoginPage extends React.Component<LoginPageProps, State> {
    constructor(props: LoginPageProps) {
        super(props);
        this.state = {
            loginId: '',
            password: '',
            errorMessage: ''
        };
    }

    validateInput = (): boolean => {
        const {loginId, password} = this.state;
        const loginIdRegex = /^[a-zA-Z0-9_-]+$/;
        const passwordRegex = /^[a-zA-Z0-9]+$/;

        if (!loginId) {
            alert('ユーザコードを入力してください');
            return false;
        }

        if (!password) {
            alert('パスワードを入力してください');
            return false;
        }
        if (!loginIdRegex.test(loginId)) {
            alert('ユーザコードは[a-z]、[A-Z]、[0-9]、 "_" 、"-"のみで入力してください。');
            return false;
        }
        // if (loginId.length < 8 || loginId.length > 20) {
        //     alert('ユーザコードは８〜20文字で入力してください');
        //     return false;
        // }
        if (!passwordRegex.test(password)) {
            alert('パスワードは[a-z]、[A-Z]、[0-9]のみで入力してください。');
            return false;
        }
        // if (password.length < 8 || password.length > 15) {
        //     alert('パスワードは８〜15文字で入力してください');
        //     return false;
        // }
        return true;
    };

    handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!this.validateInput()) {
            return;
        }
        const { loginId, password } = this.state;
        const loginEndpoint = 'http://localhost:8080/api/userLogin';
        const config = {
            headers: {
                'Content-Type': 'application/json'
              },
        };
        try {
            const response = await axios.post(loginEndpoint, {loginId, password}, config);
            const userInfo = response.data;
            // 调用onLoginSuccess回调
            this.props.onLoginSuccess(userInfo);
        } catch (error: unknown) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                const errorMessage: string = axiosError.response.data as string;
                this.setState({ errorMessage });
            } else {
                this.props.navigate('/error', {state: {message: 'The server is not responding.'}});
            }
            console.error('Login failed: ', error);
        }
    };

    // 更新组件的state。根据输入字段的name属性来确定要更新哪个状态属性
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'loginId') {
            this.setState({ loginId: value });
        } else if (name === 'password') {
            this.setState({ password: value });
        }
    };


    render() {
        const { loginId, password, errorMessage } = this.state;
        return (
            <div>
                <Header 
                />
                <div className='container'>
                    <div className='login-container'>
                        <h1>利用者登録</h1>
                        <form onSubmit={this.handleLogin}>
                            <label>
                                ログインID:
                                <input
                                    type='text'
                                    name='loginId'
                                    value={loginId}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label>
                                パスワード:
                                <input
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <button type='submit'>ログイン</button>
                        </form>
                        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                    </div>
                    <div className='features'>
                        <h3>応用機能</h3>
                        <div className='features-list'>
                            <ul>
                                <li>受注管理</li>
                                <li>外注管理</li>
                                <li>請求作成</li>
                            </ul>
                        </div>
                        <h3>マスタ管理機能</h3>
                        <h3>開発関連</h3>
                        <p>バージョンVer0.0.0.1</p>
                    </div>
                </div>
            </div>



        );
    }
}

function LoginPageWithNavigate(props:{}) {
    const navigate = useNavigate();
    // 从Context中获取setUserAuth
    const {setUserAuth} = useUser();
    // 封装登录成功后的信息保存的逻辑
    const handleLoginSuccess = (userInfo: any) => {
        setUserAuth({
            userId: userInfo.userId,
            userCode: userInfo.userCode,
            userName: userInfo.userName,
            userRole: userInfo.userRole,
            loginTime: userInfo.loginTime
        });
        localStorage.setItem('userAuth', JSON.stringify(userInfo))
        navigate('/userPage');
    }
    return <LoginPage {...props} navigate={navigate} onLoginSuccess={handleLoginSuccess} />
}

export default LoginPageWithNavigate;