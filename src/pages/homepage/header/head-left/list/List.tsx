import Left_part_list from "./subList/Left_part_list"
import Right_part_list from "./subList/Right_part_list"


function List() {
  return (
    <div className="head-list-container">
      <div className="list-headleft">
        <p className="Header">القائمة</p>
      </div>
      <div className="list-headleft-content">
        <Left_part_list/>
        <Right_part_list/>
      </div>
    </div>
  )
}

export default List



