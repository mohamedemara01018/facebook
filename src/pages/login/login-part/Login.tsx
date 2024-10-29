
import Login_from from '../login-register-components/Login_form'

function Login() {
    return (
        <div className='login-container'>
            <div>
                <Login_from />
            </div>
            <div className='content'>
                <h1>facebook</h1>
                <p dir='rtl'>يمنحك فيسبوك إمكانية التواصل مع الأشخاص ومشاركة ما تريد معهم.</p>
            </div>
        </div>
    )
}

export default Login