import React from 'react'

const Login = () => {
    return (
        <div className="banner">
            <form className="login_form">
                <label for="username">UserName</label><br></br>
                <input type="text" id="username" name="username" placeholder="Your name.." /><br></br>
                <label for="lname">Password</label><br></br>
                <input type="password" id="password" name="password" placeholder="Password.." /><br></br><br></br>
                <input type="submit" value="Submit" />
            </form>        
        </div>
    )
}

export default Login
