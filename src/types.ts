export type stateType = {
    login: {
      user: {
        id: number;
      }
      token: string
    },
  }

export type dataof_rightSidebarData={ id: number, title: string, icon: string,to:string }[] 
export type rightSidebarData = { side: string, data: dataof_rightSidebarData}


// { stateOfIcon, user, input, setInput, setStateOfIcon, setComment }

export type commentType= {
  stateOfIcon: {
    state:boolean,
    color :boolean
  },
  user: {
    profile_image:string
  }
  input:string,
  setInput: (e:string)=>void,
  setStateOfIcon:({state,color}:{state:boolean,color:boolean})=>void,
  setComment:(comment:string)=>void,
  id:number,
}