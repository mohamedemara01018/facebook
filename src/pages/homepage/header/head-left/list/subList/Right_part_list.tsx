import { useEffect, useState } from "react";
import { listData_rightPart_lefthead } from "../../../headData"
import { Link } from "react-router-dom";
type itemType = {
    id?: number;
    title?: string;
    hr: boolean;
    data?: {
        to: string;
        id: number;
        icon: string;
        title: string;
        desc: string;
    }[]
}

type filterType = {
    id?: number;
    title?: string;
    hr: boolean;
    data?: {
        id: number;
        icon: string;
        title: string;
        desc: string;
        to:string,
    }[];
}[]


function Right_part_list() {
    const [input, setInput] = useState('')
    const [filter, setFilter] = useState<filterType>([])

    useEffect(() => {
        let copyFilter: filterType = []
        copyFilter = listData_rightPart_lefthead.filter((item) => {
            return item.title && item.title.startsWith(input) || item.hr
        })
        setFilter(copyFilter)
    }, [input]);


    return (
        <div className="right-part">
            <div className="input-part">
                <input type="text" placeholder="البحث في القائمة" dir="rtl" value={input} onChange={(e) => setInput(e.target.value)} />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <Mo filter={filter} />

        </div>
    )
}

export default Right_part_list



// eslint-disable-next-line react-refresh/only-export-components
function Mo({ filter }: { filter: filterType }) {
    return <div className="right-part-content">
        {
            filter.map((item: itemType) => {
                return <div key={item.id} className="right-part-item">
                    {!item.hr ? <div>
                        <p className="Header">{item.title}</p>
                        <ul>
                            {item.data && item.data.map((i) => (
                                <li key={i.id}>
                                    <Link className="link" to={i.to}>
                                        <div className="description">
                                            <h4 className="">{i.title}</h4>
                                            <p>{i.desc}</p>
                                        </div>
                                        <i className={i.icon}></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div> : <hr />}
                </div>
            })
        }
    </div>
}

