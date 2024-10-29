import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./login-part/Login"
import './login_Register.css'
import Register from "./register-part/Register"
import { useEffect } from "react";


function Login_Register() {


    const navigate = useNavigate();
    useEffect(() => {
        navigate('/login');

    }, [])

    return (
        <div>
            {
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            }
            {/* <Login /> */}
        </div>
    )
}

export default Login_Register