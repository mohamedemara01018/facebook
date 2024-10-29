
import Posts from "./posts/Posts"
import Think from "./think/Think"



function Home_middle() {
  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingInline: '20px' }}>
      <Think />
      <Posts />
    </ div>


  )
}

export default Home_middle


