import '../styles/login.scss'


let Login = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className='input-container'>
                    <label>Email</label>
                    <input type="text" placeholder="Enter your email" />
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                    <button type='sumbit'>Sumbit</button>

                </div>
            </div>
        </div>
    )
}


export default Login