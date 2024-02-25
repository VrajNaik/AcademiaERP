import React, { useState } from 'react'
import Footer from './Footer'
import axios from 'axios'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import "../component/CSS/login.css"


export default function Login({ setAuth }) {

    let navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "", password: ""
    });

    const { username, password } = loginData;

    const onInputChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    };

    const authenticate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/v1/login", loginData)

            const resp = response.data;
            console.log(resp);
            if (resp.loggedIn) {

                setAuth(true);
                window.localStorage.setItem('anyLoggedIn', true);
                window.localStorage.setItem('loggedInUser', resp.userId);
                window.localStorage.setItem('user', JSON.stringify(resp));
                console.log('Logged in user');
                console.log('Any logged in : '+window.localStorage.getItem('anyLoggedIn'));
                navigate("/home");

            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: resp.error.msg
                });
            }
        }
        catch (error) {
            navigate("/")
        }
    };

    return (
        
         <div className="b">
         <form className="formtop" onSubmit={authenticate}>
           <div className="logo-container">
           <img src="/logo512.png" alt="Logo" className="logo"/>
            </div>
           <div className="mb-3">
             <label htmlFor="exampleInputEmail1" className="form-label">
                User Name
             </label>
             <input
               type="usename"
               className="form-control"
               name='username'
               id="username"
               placeholder='User-Name'
               value={username}
               onChange={(e) => onInputChange(e)}
             />
             <div id="emailHelp" className="form-text">
               Provide IIITB email-id (i.e: xxxx@iiib.ac.in)
             </div>
           </div>
           <div className="mb-3">
             <label htmlFor="exampleInputPassword1" className="form-label">
               Password
             </label>
             <input
               type="password"
               name='password'
               className="form-control"
               id="password"
               placeholder='Password'
               value={password}
               onChange={(e) => onInputChange(e)}
             />
           </div>
           <button class="button-19">
             Submit
           </button>
           <div>
             <p class="mt-3">
               Not registered?   <Link to="/">First Register Your Self From Admin. Contact Vishnu Sir.</Link>
             </p>
           </div>
         </form>
         </div>
       );
}
