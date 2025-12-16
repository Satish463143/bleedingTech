import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import './Login.css'

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your authentication logic here
        console.log('Login attempt:', { email, password });
        router.push('/dashboard');
    }

    return (
        <div className='login_container'>
            <div className="login_box">
                <div className="login_header">
                    <h1>Admin Login</h1>
                    <p>Enter your credentials to access the dashboard</p>
                </div>
                
                <form onSubmit={handleSubmit} className="login_form">
                    <div className="form_group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder='admin@example.com' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form_group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            name="password"
                            placeholder='Enter your password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type='submit' className="login_button">
                        Sign In
                    </button>
                </form>
            </div>        
        </div>
    )
}

export default Login