import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css'; 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, []);

    const handleLogin = async () => {
        console.warn("email,password", email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/');
        } else {
            alert("please enter correct details");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className='text-white mb-4'>Login</h1>
                <div className="input-container">
                    <input
                        type="text"
                        className="input-box"
                        placeholder="Enter Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="input-container">
                    <input
                        type="password"
                        className="input-box"
                        placeholder="Enter Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <button className="login-button" onClick={handleLogin} type="button">Login</button>
            </div>
        </div>
    );
};

export default Login;
