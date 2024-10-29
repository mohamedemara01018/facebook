import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { setAlert } from "../../../2-rtk/slices/alertSlice";
import { setUser } from "../../../2-rtk/slices/loginSlice";
import { Link } from "react-router-dom";



function Login_from() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [appearEyes, setAppearEyes] = useState<boolean>(false)

    useEffect(() => {
        if (password.length) {
            setAppearEyes(true)
        } else {
            setAppearEyes(false)
        }
    }, [password])

    // fetch login
    async function fetchLogin() {
        const url = `https://tarmeezacademy.com/api/v1/login`
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: String(username),
                    password: String(password)
                }),
            });
            const data = await response.json();
            if (data) {
                if (data.message) {
                    dispatch(setAlert({
                        title: 'نجح', mes: 'تم انشاء حساب بشكل صحيح.', type: true,
                    }))
                }
                else if (data.user && data.token) {
                    localStorage.setItem('user', JSON.stringify(data.user))
                    localStorage.setItem('token', JSON.stringify(data.token))
                    dispatch(setAlert({
                        title: 'نجح', mes: 'تم تسجيل الدخول بشكل صحيح.', type: true,
                    }))
                    dispatch(setUser(data))
                }

            }



            // switch (response.status) {
            //     // case 200:
            //     //     {
            //     //         const data = await response.json();
            //     //         if (data.message && data) {
            //     //             

            //     //             return
            //     //         }
            //     //         localStorage.setItem('user', JSON.stringify(data.user))
            //     //         localStorage.setItem('token', JSON.stringify(data.token))
            //     //         dispatch(setUser(data))
            //     //         break;
            //     //     }

            //     case 400:
            //         dispatch(setAlert({
            //             title: 'حدث خطا', mes: 'هناك خطأ في الطلب. تحقق من المعلمات.', type: true,
            //         }))
            //         break;
            //     case 401:
            //         dispatch(setAlert({
            //             title: 'حدث خطا', mes: 'غير مصرح لك. تأكد من تسجيل الدخول.', type: true,
            //         }))
            //         break;

            //     case 403:

            //         dispatch(setAlert({
            //             title: 'حدث خطا', mes: 'ليس لديك الإذن للوصول إلى هذا المورد.', type: true,
            //         }))
            //         break;

            //     case 404:
            //         dispatch(setAlert({
            //             title: 'حدث خطا', mes: 'المورد غير موجود.', type: true,
            //         }))
            //         break;
            //     case 429:
            //         dispatch(setAlert({
            //             title: "هناك تحزير", mes: 'تم إرسال عدد كبير جدًا من الطلبات. يرجى المحاولة لاحقًا.', type: true,
            //         }))
            //         break;

            //     case 422:
            //         dispatch(setAlert({
            //             title: "هناك تحزير", mes: 'تم إرسال عدد كبير جدًا من الطلبات. يرجى المحاولة لاحقًا.', type: true,
            //         }))
            //         break;

            //     case 500:

            //         dispatch(setAlert({
            //             title: 'حدث خطا', mes: 'حدث خطأ في الخادم. يرجى المحاولة لاحقًا.', type: true,
            //         }))
            //         break;

            //     case 503:
            //         dispatch(setAlert({
            //             title: 'حدث خطا', mes: 'الخدمة غير متاحة حاليًا. حاول لاحقًا.', type: true,
            //         }))
            //         break;

            //     default:
            //         dispatch(setAlert({
            //             title: 'حدث خطا', mes: `حدث خطأ غير متوقع: ${response.status}`, type: true,
            //         }))
            //         break;
            // }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            dispatch(setAlert({
                title: 'حدث خطا', mes: 'اسم المستخدم او كلمة السر خطا. ارجو كتابتهم بشكل صحيح.', type: true,
            }))
        }
    }

    return (
        <div className="login-form">
            <form action="">
                <input type="text" dir="rtl" placeholder="اسم المستخدم" value={username} onChange={(e) => setUsername(e.target.value)} />
                <div className="password">
                    {appearEyes ? <span onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                    </span> : null}
                    <input type={showPassword ? 'text' : "password"} dir="rtl" placeholder="كلمة السر" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="button" className="button" value="تسجيل الدخول" onClick={() => {
                    fetchLogin();
                }} />
            </form>
            <a href="">هل نسيت كلمة السر؟</a>
            <hr />
            <Link to={'/register'}><button>انشاء حساب جديد</button></Link>
        </div>
    )
}

export default Login_from