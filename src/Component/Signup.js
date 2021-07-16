import React from 'react'

const Signup = () => {
    return (
        <div className="banner">
            <form className="signup_form">
                <label for="username">UserName</label><br></br>
                <input type="text" id="username" name="username" placeholder="Your name.." /><br></br>
                <label for="lname">Password</label><br></br>
                <input type="password" id="password" name="password" placeholder="Password.." /><br></br>
                <label for="email">E-Mail</label><br></br>
                <input type="text" id="email" name="email" placeholder="abc04@gmail.com" /><br></br>
                <br></br>
                <input type="submit" value="Submit" />
            </form>        
        </div>
    )
}

export default Signup
