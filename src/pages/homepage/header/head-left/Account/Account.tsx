import { useDispatch } from "react-redux";
import { setLogout } from "../../../../../2-rtk/slices/logOutSlice";


function Account() {
  const user: { profile_image: string, username: string } = JSON.parse(String(localStorage.getItem('user')))

  const dispatch = useDispatch();

  return (
    <div className="account-container">
      <ul>
        <li>
          <p>{user.username}</p>
          <img src={user.profile_image} alt='df' />
        </li>
        <li onClick={() => { dispatch(setLogout(true)) }}>
          <p>تسجيل الخروج</p>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </li>
      </ul>
    </div>
  )
}

export default Account