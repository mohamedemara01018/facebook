import { useState } from "react"
import { popUp_icon_post_footer } from "../../../homeData"


function Post_head({ name, created_at, profile_image, flag }: { name: string, created_at: string, profile_image: string, flag?: boolean }) {
    const [click, setclick] = useState(false)

    return (
        <div className="post-head">
            <div className="post-head-left-part">
                {flag && <i className="fa-solid fa-x"></i>}
                <div className="icon-dots">
                    <i className="fa-solid fa-ellipsis-vertical" data-click={click ? 'true' : 'false'} onClick={() => setclick(!click)}></i>
                    <Popup_icon click={click} name={name} />
                </div>
            </div>
            <div className="post-head-right-part">
                <div className="data">
                    <h3>{name}</h3>
                    <div>
                        <i className="fa-solid fa-earth-americas"></i>
                        <p >{created_at}</p>
                    </div>
                </div>
                <img src={profile_image} alt="" />
            </div>
        </div>
    )
}

export default Post_head



function Popup_icon({ click, name }: { click: boolean, name: string }) {
    return <div className="popup-container" data-click={click ? 'true' : 'false'}>
        <ul>
            {
                popUp_icon_post_footer(name).map((item) => {
                    return <li key={item.id}>
                        {
                            !item.hr ? <div className="item-container">
                                <div className="item">
                                    <h3 dir="rtl">{item.title}</h3>
                                    <p dir="rtl">{item.desc}</p>
                                </div>
                                <i className={item.icon}></i>
                            </div> : <hr />
                        }
                    </li>
                })
            }
        </ul>
    </div>
}