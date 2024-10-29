import { Link } from "react-router-dom"
import { dataof_rightSidebarData } from "../../../../../types"


function Right_sidebar({ filteredData, setToggle, toggle }: { filteredData: dataof_rightSidebarData, setToggle: (val: boolean) => void, toggle: boolean }) {
    const user = JSON.parse(String(localStorage.getItem('user')))
    return (
        <ul>
            <li ><Link to={'/MainHome'} className="link">
                <img src={user.profile_image} alt='profile_img' />
                <p>{user.username}</p>
            </Link></li>
            {
                filteredData.map((item) => {
                    return <li key={item.id}><Link to={`/${item.to}`} className="link">
                        <i className={item.icon}></i>
                        <p >{item.title}</p>
                    </Link></li>
                })
            }
            <li className="more" onClick={() => setToggle(!toggle)}  ><Link to={'/MainHome'} className="link">
                {toggle ? <i className="fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-up"></i>}
                <p>{toggle ? 'عرض المزيد' : 'عرض الاقل'}</p>
            </Link></li>

        </ul>
    )
}

export default Right_sidebar