import axios from 'axios';
import { useState } from 'react';
import './loginSignUp.css';

function LoginSignUp({ type, onClick, onSubmitBtn }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

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
            const response = await axios.get('http://localhost:3001/users');
            const users = response.data;

            const User = users.find(u => u.user.trim() === user.trim() && u.password.trim() === password.trim());

            if (User) {
                alert("Login successful");
                handleClick();
            } else {
                alert("Invalid credentials");
            }
        }

        if (type === "signup") {
            const response = await axios.get('http://localhost:3001/users');
            const users = response.data;

            const User = users.find(u => u.user.trim() === user.trim());

            if (!User) {
                await axios.post('http://localhost:3001/users', {
                    user: user,
                    password: password,
                    watchList: []
                });
                alert("Signup successful");
                handleClick();
            }
            else {
                alert("username already exist in db!");
            }
        }


        onSubmitBtn();
    }

    return (
        <div className='user'>
            <div>{type}</div>
            <form onSubmit={validate} id="loginsignupform">
                <div>
                    <input type="text" value={user} onChange={handleUsernameChange} name="usr" placeholder="username..." />
                </div>
                <div>
                    <input type="password" value={password} onChange={handlePasswordChange} name="pwd" placeholder="password..." />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginSignUp;