import Head_left from "./head-left/Head-left"
import Head_middle from "./head-middle/Head-middle"
import Head_right from "./head-right/Head-right"
import './header.css'

function Header() {
  return (
    <header className="head-container">
      <Head_left />
      <Head_middle />
      <Head_right />
    </header>
  )
}

export default Header