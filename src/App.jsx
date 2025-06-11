import { Route, Routes } from "react-router-dom"
import MainPopUp from "./components/MainPopUp"
import SuspiciousActivityAlert from "./components/SuspiciousActivity"
import TawkToChat from "./components/TawtToChat"

 const App = () => {
    return (
      <div>
        <TawkToChat/>
        <Routes>
          <Route path="/" element={<SuspiciousActivityAlert/>}/>
          <Route path="/pop-up" element={<MainPopUp/>}/>
        </Routes>
      </div>
    )
  }
  export default App