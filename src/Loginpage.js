import React, { useState } from 'react'
import './Loginpage.css'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styled from 'styled-components';



function Loginpage() {
    const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: white;
    justify-content: center;
    `



    const [type, setType] = useState('password');
    return (
        <Div className='login_page'>
            <div className="login_container">
                <h1>Login </h1>
                <form action="">
                    <h4>Login ID</h4>
                    <input type="text" placeholder='Enter login ID' />

                    <h4>Password</h4>
                    <div className="password">
                        <input type={type} placeholder="Enter Password" />
                        {/* <VisibilityOffIcon style={{ marginLeft: '-30px' }} /> */}
                        {type === 'password' ? (
                            < VisibilityOffIcon
                                fontSize='small'
                                style={{ marginLeft: '-30px' }}
                                onClick={() => { setType('text') }} />) :
                            (<VisibilityIcon
                                fontSize='small'
                                style={{ marginLeft: '-30px' }}
                                onClick={() => { setType('password') }} />)}
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id='remember_me' />
                        <label htmlFor="remember_me">Remember Me</label>
                        <p>Change Password</p>
                    </div>
                    <div className="term_condition">
                        <input type="checkbox" id='terms_condition' />
                        <label htmlFor="terms_condition">Agree to <b style={{ color: '#fd5800' }}> Terms & Conditions</b></label>
                    </div>
                    <button type='submit' className='login_signInButton'>Login</button>
                </form>


                <div className='register'>
                    <p className='new_to_account'>Don't have an account?</p>
                    <button className='login_registerButton' ><b> Register Here </b></button>
                </div>
            </div>


        </Div>
    )
}

export default Loginpage