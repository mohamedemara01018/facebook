import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { set_user_id } from "../../../../../2-rtk/slices/showUserslice";

function Left_sidebar({ fetchedData }: { fetchedData: { data: { profile_image: string, id: number, username: string }[] } }) {
    const [toggle, setToggle] = useState(true)
    const [input, setInput] = useState('');
    const [filteredUser, setFilteredData] = useState<{ profile_image: string, id: number, username: string }[]>([])
    function handleToggle(para: boolean) {
        setToggle(para)
    }
    
    useEffect(() => {

        const filter: { profile_image: string, id: number, username: string }[] = fetchedData && fetchedData.data && fetchedData.data.filter((item) => {
            return (item.username.toLowerCase().startsWith(input.toLowerCase()))
        })
        setFilteredData(filter)
    }, [input])
    const dispatch = useDispatch();

    return (
        <ul>

            <div className="head-left-sidebar">
                <div className="icons">
                    <i className="fa-solid fa-ellipsis"></i>
                    {toggle && <i className="fa-solid fa-magnifying-glass" onClick={() => handleToggle(false)}></i>}
                </div>
                {toggle ? <p>جهات الاتصلات</p> : <div className="input">
                    <input type="text" placeholder="ارسال رسالة ل..." dir="rlt" value={input} onChange={(e) => setInput(e.target.value)} />
                    <i className="fa-solid fa-arrow-right" onClick={() => { handleToggle(true); setInput('') }}></i></div>}
            </div>



            {
                filteredUser ? fetchedData && fetchedData.data && filteredUser.map((item) => {
                    return <li key={item.id} className="li_left" onClick={() => dispatch(set_user_id({ value: item.id, state: true }))}>
                        <img src={item.profile_image} alt="" />
                        <p >{item.username}</p>
                    </li>
                }) : fetchedData && fetchedData.data && fetchedData.data.map((item) => {
                    return <li key={item.id} onClick={() => dispatch(set_user_id({ value: item.id, state: true }))} className="li_left">
                        <img src={item.profile_image} alt="" />
                        <p >{item.username}</p>
                    </li>
                })
            }

        </ul>
    )
}

export default Left_sidebar