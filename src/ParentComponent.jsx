import {ChildComponent} from "./ChildComponent"

export const ParentComponent = () => {
  const handleClick=()=>{
    console.log("Button Clicked")
  };
  
  return (
    <div className="box">
      <h3>ParentComponent</h3>
      <ChildComponent handleClick={handleClick}/>
    </div>
  )
}
