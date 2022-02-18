import { useState } from "react"
import { Link } from "react-router-dom";

export function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div>
            <form>
                <h1>Sign Up</h1>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input type="confirmPassword" onChange={e => setConfirmPassword(e.target.value)} />
                </label>
                <div>
                    <h5>Already have an account?</h5>
                    <Link to="/login">Log In</Link>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}