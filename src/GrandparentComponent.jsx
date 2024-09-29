import { createContext } from "react";
import { ParentComponent } from "./ParentComponent";

export const GrandContext=createContext();

export const GrandparentComponent = () => {
const data = "Hello from Grandparent Hi";
  return (
    <div className="box">
        <h3>Grandparent Component</h3>
        <GrandContext.Provider value={data}>
          <ParentComponent/>
        </GrandContext.Provider>
    </div>
  )
}
