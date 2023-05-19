// import './components/Login.css';
import React from 'react';

const LoginPage = () => {
    return (
        <>
            <h1>This is Login page</h1>
            <div>
                <lable>
                    First Name
                    <input type='text' placeholder='First Name' />
                </lable><br />
                <lable>
                    Last Name
                    <input type='text' placeholder='Last Name' />
                </lable><br />
                <lable>
                    Password
                    <input type="password" placeholder='Password' />
                </lable><br />
            </div>

        </>
    )
}
export default LoginPage;