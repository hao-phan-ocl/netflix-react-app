import logo from '../Nav/Netflix_Logo_RGB.png';
import './Login.scss';

export default function Login() {
    return (
        <div className='login' >
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/4aaa6dea-d066-49de-86b3-02982cd68812/FI-en-20211108-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
                alt='Background Banner'
                className='banner'
            />
            <img src={logo} alt='Netflix Logo' className='logo' />
            <div className='login-wrapper'>
                <div 
                    className='login-table'
                >
                    {/* <div className='login-table-content'> */}
                        <div className='login-form'>
                            <h1>Sign In</h1>
                            <input 
                                type='text'
                                className='btn'
                                placeholder='Email'
                                autoComplete='off'
                            />
                            <input 
                                type='text'
                                className='btn'
                                placeholder='Password'
                                autoComplete='off'
                            />
                            <button className='sign-in btn'>
                                Sign In
                            </button>
                            <div className="text-box">
                                <h2 className='text' >New to Netflix?</h2>
                                <h2 className='text light'>Sign up now</h2>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}