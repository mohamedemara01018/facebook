import { useState } from "react"



function Head_right() {
    const [foucs, setFoucs] = useState(false);
    const [click, setclick] = useState(false);
    return (
        <div className="rightHead-container" data-foucs={foucs ? 'true' : 'false'}>
            <div className="input-part">
                <input data-click-icon={click ? 'true' : 'false'} type="text" placeholder={'بحث في الفيسبوك'} dir="rtl" onFocus={() => setFoucs(true)} onBlur={() => setFoucs(false)} />
                <i className="fa-solid fa-magnifying-glass" onClick={() => setclick(!click)}></i>
            </div>
            <div className="icon-part">
                {
                    foucs ? <i className="fa-solid fa-arrow-right"></i> : <a href=""><i className="fa-brands fa-facebook" onClick={() => setFoucs(false)}></i></a>
                }
            </div>
        </div>
    )
}

export default Head_right