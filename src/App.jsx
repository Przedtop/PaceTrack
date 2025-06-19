import './App.css'
import {useState} from "react";

function App() {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <>
            <div className="container">
                <h2>Login</h2>
                <form id="login-form">
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default App
