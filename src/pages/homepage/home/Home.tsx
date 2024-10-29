
import Signout from '../../../components/Logout'
import Home_middle from './home-middle/Home-middle'
import './home.css'
import { rightSideBarData } from './homeData'
import SideBars from './sidebars/SideBars'

function Home() {
  // localStorage.clear()
  return (
    <div className='home-contaienr'>
      <Signout meg={'هل تريد تسجل الخروج؟'} btn_txt1={'نعم'} btn_txt2={'لا'} />

      <SideBars side={'left'} data={rightSideBarData} />
      <Home_middle />
      <SideBars side={'right'} data={rightSideBarData} />

    </div >
  )
}

export default Home