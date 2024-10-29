import { SetStateAction, useRef, useState } from "react"
import Create_post_img from "./create-post-component/Create_post_img"
import './create-post.css'
import { setCreatePost } from "../../../2-rtk/slices/createPostslice";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../../2-rtk/slices/alertSlice";
function CreatePost() {
    const [textarea, setTextarea] = useState('');
    const [img, setImg] = useState<File | undefined>(undefined);
    const user = JSON.parse(String(localStorage.getItem('user')))
    const t = useRef<HTMLTextAreaElement | null>(null);
    const handleInput = (e: { target: { value: SetStateAction<string>; }; }) => {
        setTextarea(e.target.value);
        if (t.current) {
            t.current.style.height = "auto"
            t.current.style.height = `${t.current.scrollHeight}px`;
        }
    };
    const stateOfCreatePost = useSelector((state: { createPost: { value: boolean } }) => state.createPost.value)
    const dispatch = useDispatch()

    async function handleCreatePost() {
        const url = 'https://tarmeezacademy.com/api/v1/posts';
        const token = JSON.parse(String(localStorage.getItem('token')))
        const form = new FormData();
        form.append('image', img as File);
        form.append('body', String(textarea))
        const responsive = await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: form
        });
        const json = await responsive.json()
        if (Object.prototype.hasOwnProperty.call(json, 'message')) {
            dispatch(setAlert({
                title: 'حدث خطا', mes: 'يجب املاء كل الخانات', type: true,
            }))
        } else {
            dispatch(setCreatePost(false))
            dispatch(setAlert({
                title: 'نجح', mes: 'تم انشاء منشور بنجاح', type: true,
            }))
            window.location.reload()
        }
    }


    return (
        <div className="creat-post-container" data-appear={stateOfCreatePost ? 'true' : 'false'}>
            <div className="create-post-content">
                <div className="create-post-header">
                    <i className="fa-solid fa-x" onClick={() => dispatch(setCreatePost(false))}></i>
                    <p>انشاء منشور</p>
                    <div></div>
                </div>
                <hr />
                <div className="your-image">
                    <h3>{user.username}</h3>
                    <img src={user.profile_image} alt="profile_img" />
                </div>
                <div className="thinging">
                    <textarea ref={t} dir="rtl" placeholder={`بم تفكر يا ${user.username}`} value={textarea} onChange={handleInput}></textarea>
                </div>
                <Create_post_img setImg={setImg} />
                <hr />
                <button onClick={handleCreatePost}>نشر</button>
            </div>
        </div>
    )
}

export default CreatePost