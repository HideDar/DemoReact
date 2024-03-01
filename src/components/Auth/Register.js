import './Register.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../Services/apiServices';
import { ToastContainer, toast } from 'react-toastify';
import { flatMap } from 'lodash';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [isShowPassword, setIsShowPassword] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleRegister = async () => {
        //validate
        const isValidate = validateEmail(email);
        if (!isValidate) {
            toast.error("Ivalid Email");
            return;

        }
        if (!password) {
            toast.error("Ivalid PassWord");
            return;
        }
        //submit apis
        let data = await postRegister(email, password, username);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    const navigate = useNavigate();

    return (
        <div className="register-container">
            <div className='header' >
                <span>Already have an account ?</span>
                <button onClick={() => { navigate('/login') }}>Log in</button>
            </div>

            <div className='title col-4 mx-auto' >
                Quiz
            </div>

            <div className='welcome col-4 mx-auto' >
                Hello, who's this?
            </div>

            <div className='content-form col-4 mx-auto' >
                <div className='form-group'>
                    <label>Email(*)</label>
                    <input
                        type={'email'} className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    ></input>


                </div>

                <div className='form-group pass-group'>
                    <label>PassWord(*)</label>
                    <input
                        type={isShowPassword ? "text" : "password"} className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                    {isShowPassword ?
                        <span className='icons-eye'
                            onClick={() => setIsShowPassword(false)}>
                            <FaRegEye />
                        </span>
                        :
                        <span className='icons-eye'
                            onClick={() => setIsShowPassword(true)}>
                            <FaRegEyeSlash />
                        </span>
                    }
                </div>
                <div className='form-group'>
                    <label>UserName</label>
                    <input type={'username'} className='form-control'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    ></input>
                </div>


                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleRegister()}
                    >Register to Quiz</button>
                </div>

                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}> &#60;&#60; Go to Homepage</span>
                </div>

            </div>
        </div>
    )
}

export default Register;