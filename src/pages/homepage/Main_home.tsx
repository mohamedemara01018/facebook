import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./header/Header"
import Home from "./home/Home"
import { useEffect } from "react";
import CreatePost from "./create-post/createPost";
import Show_post from "./show-post/Show_post";
import NotFound from "../../components/NotFound";
import Send_Message from "./home/sidebars/send-massage/Send_Message";



function Main_home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/MainHome');
  }, [])
  return (
    <div>
      <CreatePost />
      <Show_post />
      <Send_Message />
      <div style={{ position: "fixed", left: '0', right: '0', zIndex: '200' }}>
        <Header />
      </div>


      <Routes>
        <Route path='/MainHome' element={<div style={{ paddingTop: '80px' }}><Home /></div>} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default Main_home