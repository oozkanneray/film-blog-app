import Films from "./pages/Films"
import Tvseries from "./pages/Tvseries"
import {Routes,Route} from "react-router-dom"
import Navbar from "./Navbar"
import People from "./pages/People"
import Profile from "./components/Reviews/Profile/Profile"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar/>} >
          <Route path="/films" element={<Films/>} />
          <Route path="/tv-series" element={<Tvseries/>} />
          <Route path="/people/" element={<People/>} />
          <Route path="/people/:username" element={<Profile/>} />
      </Route>
    </Routes>
  )
}

export default App
