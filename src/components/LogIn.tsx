import { useState } from "react"
import { Link } from "react-router-dom";


export function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
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
                    <h5>Don't have an account?</h5>
                    <Link to="/signup">Sign Up</Link>
                </div>


                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}