import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import AddImage from "../../../components/addImage";
import { useDispatch } from "react-redux";
import { setUser } from "../../../2-rtk/slices/loginSlice";
import { setAlert } from "../../../2-rtk/slices/alertSlice";


function Register_form() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('');
    const [img, setImg] = useState<File | undefined>(undefined);
    const [appearEyes, setAppearEyes] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        if (password.length) {
            setAppearEyes(true);
        } else {
            setAppearEyes(false)
        }
    }, [password])

    async function fetchRegister() {
        const url = `https://tarmeezacademy.com/api/v1/register`
        const form = new FormData();

        form.append('username', String(username));
        form.append('name', String(name));
        form.append('password', String(password));
        form.append('image', img as File);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: form
            });
            const data = await response.json();
            
            if (data) {
                if (data.message) {
                    dispatch(setAlert({
                        title: 'حدث خطا', mes: 'اسم المستخدم ماخوذ', type: true,
                    }))
                }
                else if (data.user && data.token) {
                    localStorage.setItem('user', JSON.stringify(data.user))
                    localStorage.setItem('token', JSON.stringify(data.token))
                    dispatch(setAlert({
                        title: 'نجح', mes: 'تم انشاء حساب يشكل صحيح.', type: true,
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
        <div className="register-form">
            <form action="">
                <input dir="rtl" type="text" placeholder="اسم المستخدم" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input dir="rtl" type="text" placeholder="اسمك" value={name} onChange={(e) => setName(e.target.value)} />


                <div className="password">
                    {appearEyes ? <span onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                    </span> : null}
                    <input dir="rtl" type={showPassword ? 'text' : "password"} placeholder="كلمة السر" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>



                <AddImage setImg={setImg} />



                <input type="button" className="button" value={'انشاء حساب في الفيسبوك'} onClick={() => { fetchRegister() }} />



            </form>
            <Link to={'/login'}>هل لديك حساب بالفعل؟</Link>
        </div>
    )
}

export default Register_form