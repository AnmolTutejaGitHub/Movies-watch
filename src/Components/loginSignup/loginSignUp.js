import axios from 'axios';
import { useState } from 'react';
import './loginSignUp.css';
import { ImCross } from "react-icons/im";

function LoginSignUp({ type, onClick, onSubmitBtn }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function handleUsernameChange(e) {
        setUser(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleClick() {
        onClick(user);
    }

    async function validate(event) {
        event.preventDefault();

        if (user.trim() == '' || user.trim() == ' ') {
            alert("username or password missing");
            onSubmitBtn();
            return false;
        }

        if (type === "login") {
            try {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
                    email: email,
                    password: password,
                    name: user
                });
                if (response.status == 200) handleClick();
            } catch (e) {
                alert("Invalid Credentials");
            }
        }

        if (type === "signup") {
            try {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signups`, {
                    email: email,
                    password: password,
                    name: user
                });
                if (response.status == 200) handleClick();
            } catch (e) {
                alert("username or email already exists");
            }

        }


        onSubmitBtn();
    }


    function closeLoginSignup() {
        onSubmitBtn();
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    return (
        <div className='user-container'>
            <div className='user'>
                <ImCross className='cross' onClick={closeLoginSignup} />
                <div className='auth-type'>{type}</div>
                <form onSubmit={validate} id="loginsignupform">
                    <input type="text" value={user} onChange={(e) => handleUsernameChange(e)} name="usr" placeholder="username..." />
                    <input type="email" value={email} onChange={(e) => handleEmailChange(e)} name="emil" placeholder="Email..." />
                    <input type="password" value={password} onChange={(e) => handlePasswordChange(e)} name="pwd" placeholder="password..." />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LoginSignUp;