import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./SignUp.css"
const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
 
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, []);

    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/');
    }
  return (
    <div className='container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark'>
    <div className='card p-5'>
        <h1 className='text-white mb-4'>Sign Up</h1>
        <div className='mb-3'>
            <input
                className='form-control'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Name'
            />
        </div>
        <div className='mb-3'>
            <input
                className='form-control'
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Email'
            />
        </div>
        <div className='mb-3'>
            <input
                className='form-control'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Password'
            />
        </div>
        <button className='btn btn-success' type='button' onClick={collectData}>Sign Up</button>
    </div>
</div>
  )
}

export default SignUp