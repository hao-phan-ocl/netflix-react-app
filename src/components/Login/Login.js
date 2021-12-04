import { Alert } from '@mui/material'
import { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { UserContext } from '../../store/UserContext'
import logo from '../Nav/Netflix_Logo_RGB.png'
import './Login.scss'

export default function Login() {
    const {user, login} = useContext(UserContext)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    
    const emailRef = useRef()
    const passwordRef = useRef()

    const navigate = useNavigate()

    if (!user)  {
        navigate('/')
    }
    
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/home')
        } catch (err) {
            setError(err.message.slice(10))
        }

        setLoading(false)
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
                        <h1>Sign In</h1>
                        {error && (
                            <Alert 
                                severity='error'
                                sx={{mb: 2, fontSize: 16, width:'320px'}}
                                className='alert'
                            >
                                {error}
                            </Alert>
                        )}
                        {user && (
                            <Alert severity='success' sx={{mb: 2, fontSize: 16}}>
                                {user.email}
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
                        <button className='sign-in btn' disabled={loading} onClick={handleSubmit}>
                            {loading ? 'Loading...' : 'Sign In'}
                        </button>
                        <div className='text-box'>
                            <h2 className='text' >New to Netflix?</h2>
                            <h2 
                                className='text light' 
                                onClick={() => {
                                    setError('')
                                    navigate('/register')
                                }} 
                            >
                                Sign up now
                            </h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}