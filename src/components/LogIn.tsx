import { useState } from "react"
import { Link } from "react-router-dom";
import "../styles/LogInSignUp.css";


export function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="loginContainer">
            <form>
                <h1>Welcome to Rin Tin Tinder!</h1>
                <h2>Log In</h2>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>

                <div>
                    <label>Don't have an account?</label>
                    <Link className="link" to="/signup">Sign Up</Link>
                </div>


                <div>
                    <button className="button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}