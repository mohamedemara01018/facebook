import { useEffect, useRef, useState } from "react"
import Left_sidebar from "../../../home/sidebars/left-sidebar/left_sidebar"

type fetchedType = {
  data: {
    profile_image: string,
    id: number, username: string
  }[]
}


function Massenger() {
  const [fetchedData, setFetchedData] = useState<fetchedType>({} as fetchedType)
  const [limit, setLimit] = useState(20)


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


  async function fetchUser(l: number) {
    const url = `https://tarmeezacademy.com/api/v1/users?limit=${l}`
    try {
      const responsive = await fetch(url);
      const json = await responsive.json()
      setFetchedData(json)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchUser(limit)
  }, [limit])
  return (
    <div ref={divRef} className="messenger-container">
      <Left_sidebar fetchedData={fetchedData} />
    </div>
  )
}

export default Massenger