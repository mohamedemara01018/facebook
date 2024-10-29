import { useDispatch } from "react-redux"
import { thinkData } from "../../homeData"
import { setCreatePost } from "../../../../../2-rtk/slices/createPostslice"

function Think() {
    const user: { profile_image: string, username: string } = JSON.parse(String(localStorage.getItem('user')));

    const dispatch = useDispatch()
    return (
        <div className="think-middle-container">
            <div className="think-content">
                <div className="header-think">
                    <div className="input" dir="rtl" onClick={() => dispatch(setCreatePost(true))}>
                        بم تفكر يا {user.username} ؟
                    </div>
                    <img src={user.profile_image} alt="" />
                </div>
                <hr />
                <ul className="footer-think">
                    {
                        thinkData.map((item) => {
                            return <li key={item.id} onClick={() => item.title == 'صورة/فيديو' && dispatch(setCreatePost(true))}>
                                <h3>{item.title}</h3>
                                <i className={item.icon}></i>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div >
    )
}

export default Think