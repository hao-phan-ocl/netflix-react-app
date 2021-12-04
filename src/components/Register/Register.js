import { signOut } from '@firebase/auth'
import { useContext, useRef, useState } from 'react'
import logo from '../Nav/Netflix_Logo_RGB.png'
import '../Login/Login.scss'
import { Alert } from '@mui/material'
import { auth } from '../../firebase/firebase'
import { useNavigate } from 'react-router'
import { UserContext } from '../../store/UserContext'

export default function Register() {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { signup } = useContext(UserContext)
    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
        
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/home')
        } catch (err) {
            setError(err.message.slice(10))
        }

        setLoading(false)
    }

    async function logout(e) {
        e.preventDefault()
        await signOut(auth)
    }

    return (
        <div className='login' >
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/4aaa6dea-d066-49de-86b3-02982cd68812/FI-en-20211108-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
                alt='Background Banner'
                className='banner'
            />
            <img src={logo} alt='Netflix Logo' className='logo' />
            <div className='login-wrapper'>
                <div className='login-table'>
                    <form className='login-form'>
                        <h1>Sign Up</h1>
                        {error && (
                            <Alert 
                                severity='error'
                                sx={{mb: 2, fontSize: 16, width:'320px'}}
                                className='alert'
                            >
                                {error}
                            </Alert>
                        )}
                        <input 
                            type='text' className='btn'
                            placeholder='Email' autoComplete='off'
                            ref={emailRef}
                        />
                        <input 
                            type='password' className='btn'
                            placeholder='Password' autoComplete='off'
                            ref={passwordRef}
                        />
                        <input 
                            type='password' className='btn'
                            placeholder='Password Confirmation' autoComplete='off'
                            ref={passwordConfirmRef}
                        />
                        <button className='sign-in btn' disabled={loading} onClick={handleSubmit}>
                            {loading ? 'Loading...' : 'Sign Up'}
                        </button>
                        <button className='sign-in btn' onClick={logout}>
                            Log Out
                        </button>
                        <div className='text-box'>
                            <h2 className='text' >Already a member?</h2>
                            <h2 
                                className='text light' 
                                onClick={() => {
                                    setError('')
                                    navigate('/')
                                }} 
                            >
                                Sign in
                            </h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
