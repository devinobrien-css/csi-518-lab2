import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { AdditionCalculator } from "./components/AdditionCalculator.component";
import { InventoryPage } from "./components/Inventory.components";
import { UserCard } from "./components/UserCard.component";

/** Main App Component
 * @returns the rendered application
 */
const App = () => {

  const [page,setPage] = useState("assign1")

  return (
    <div className="w-75 mx-auto mt-4">
      <ul className="nav nav-tabs nav-justified">
        <li className="nav-item">
          <p className={`nav-link ${page==="assign1"?"active":""}`} onClick={()=>setPage("assign1")}>Assignment 1</p>
        </li>
        <li className="nav-item">
          <p className={`nav-link ${page==="assign2"?"active":""}`} onClick={()=>setPage("assign2")}>Assignment 2</p>
        </li>
      </ul>
      {
        page==="assign1"?(
          <>
            <UserCard />
            <AdditionCalculator />
          </>
        ):(
          <>
            <InventoryPage />
          </>
        )
      }
    </div>
  );
}
export default App;

