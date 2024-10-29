import { useState } from "react"
import { leftData } from "../headData"





function Head_left() {
    const user: { profile_image: string } = JSON.parse(String(localStorage.getItem('user')))
    
    const [hover, setHover] = useState<number>(0);
    const [click, setClick] = useState<number>(0);

    function handleClick(id: number) {
        if (click == id) {
            setClick(0)
        } else {
            setClick(id)
        }
    }
    return (
        <div className="lefthead-container">
            {
                leftData.map((item, ind) => {
                    return <div key={item.id} className="item-container"  >
                        <div className="icon-part" onClick={() => handleClick(item.id)} onMouseEnter={() => setHover(item.id)} onMouseLeave={() => setHover(0)}>
                            {ind == 0 ? <img style={{ cursor: 'pointer' }} src={user.profile_image} /> : <i data-click={item.id == click ? 'true' : 'false'} className={item.icon}></i>}
                            <p data-hover={hover == item.id ? 'true' : 'false'}>{item.data}</p>
                        </div>
                        <div data-click={click == item.id ? 'true' : 'false'} className="component-part">
                            {item.component}
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Head_left