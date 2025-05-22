import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from './features/auth/authSlice'
import type { RootState } from './store'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { status, error, user } = useSelector((state: RootState) => state.auth)

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault()
        dispatch(loginUser({ username: email, password }) as any)
    }

    useEffect(() => {
        if (status === 'succeeded' && user) {
            window.alert('Login successful!')
            navigate(`/dashboard/profile/${user.username}`)
        }
    }, [status, user, navigate])

    return (
        <div>
            <h2>Login Page</h2>
            <form
                onSubmit={handleLogin}
                className="login-form gap-5 flex flex-col w-1/2 md:w-100 mx-auto"
            >
                <input
                    className="h-12 p-2 border border-gray-300 rounded"
                    type="text"
                    placeholder="Username"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className="h-12 p-2 border border-gray-300 rounded"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    {status === 'loading' ? 'Logging in...' : 'Login'}
                </button>
            </form>
            {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
            )}
        </div>
    )
}

export default Login
