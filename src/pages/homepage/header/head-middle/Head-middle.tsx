import { useState } from "react"
import { middleData } from "../headData"
import { Link } from "react-router-dom";


function Head_middle() {
    const [hover, setHover] = useState<number>(0);
    const [click, setClick] = useState<number>(5);
    return (
        <ul className="midhead-ul-container">
            {
                middleData.map((item) => {
                    return <Link to={item.to} className="li"  data-click={click == item.id ? 'true' : 'false'} key={item.id} onClick={() => setClick(item.id)} onMouseEnter={() => setHover(item.id)} onMouseLeave={() => setHover(0)} >
                        <a href="">
                            <i className={item.icon}></i>
                            <p data-hove={item.id == hover ? true : false}>{item.data}</p>
                        </a>
                    </Link>
                })
            }
        </ul>
    )
}

export default Head_middle