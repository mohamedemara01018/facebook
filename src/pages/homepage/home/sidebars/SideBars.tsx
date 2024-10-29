import { useEffect, useRef, useState } from "react"
import { dataof_rightSidebarData, rightSidebarData } from "../../../../types";
import Left_sidebar from "./left-sidebar/left_sidebar";
import Right_sidebar from "./right-sidebar/Right_sidebar";
import { setAlert } from "../../../../2-rtk/slices/alertSlice";
import { useDispatch } from "react-redux";

type fetchedType = {
    data: {
        profile_image: string,
        id: number, username: string
    }[]
}
function SideBars({ side, data }: rightSidebarData) {


    const [toggle, setToggle] = useState(true);
    const [filteredData, setFilteredData] = useState<dataof_rightSidebarData>([])
    const [fetchedData, setFetchedData] = useState<fetchedType>({} as fetchedType)
    const [limit, setLimit] = useState(10);
    const dispatch = useDispatch()
    // *************fetchuser limitations**********
    async function fetchUser(l: number) {
        const url = `https://tarmeezacademy.com/api/v1/users?limit=${l}`
        try {
            const responsive = await fetch(url);
            const json = await responsive.json()
            setFetchedData(json)
        } catch {
            dispatch(setAlert({
                title: 'هناك تحزير', mes: 'تم إرسال عدد كبير جدًا من الطلبات. يرجى المحاولة لاحقًا ', type: true,
            }))
        }
    }
    useEffect(() => {
        fetchUser(limit)
    }, [limit])
    // *************fetchuser limitations**********


    // *********start part of the toggle***********
    useEffect(() => {
        if (toggle) {
            const copy = data.slice(0, 7);
            setFilteredData(copy)
        } else {
            setFilteredData(data)
        }
    }, [toggle])
    // *********end part of the toggle***********


    // ************start scroll*************
    const divRef = useRef<HTMLDivElement | null>(null)
    const handleScroll = () => {
        const div = divRef.current;
        if (div && (div.scrollTop + div.clientHeight) + 10 >= div.scrollHeight) {
            setLimit((prev) => prev + 1)
        }
    };
    useEffect(() => {
        const div = divRef.current;
        if (div) {
            div.addEventListener('scroll', handleScroll);
        }
    }, [])
    // ************end scroll*************

    return (

        <div ref={divRef} className="sidebar-container" data-side={side}>
            <div>
                {side == 'right'
                    ? <Right_sidebar filteredData={filteredData} toggle={toggle} setToggle={setToggle} />
                    : <Left_sidebar fetchedData={fetchedData} />}

            </div>
        </div >
    )
}

export default SideBars