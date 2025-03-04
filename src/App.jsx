import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Yarn from "./pages/Yarn";
import Home from "./pages/Home";
import Patterns from "./pages/Patterns";
import Tutorials from "./pages/Tutorials";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import VideoTutorial from './pages/VideoTutorial';
import Profile from "./pages/Profile"
import AuthRoute from './AuthRoute';


const username = "read-30374bdbb4186ef30d28bc0f14b4e697";
const password = "1qg8ZJMG6aCJL5mf64gfV6X7kKEzvSu3L+Dvc47t";
const response = await fetch("https://api.ravelry.com/yarns/search.json", {
  method: "GET",
  headers: {
    "Authorization": "Basic " + btoa(username + ":" + password)
  }
})
if (!response.ok) throw new Error("Failed to fetch yarns");
const data = await response.json();

const yarnIDs = data.yarns.map(yarn => yarn.id);
console.log(yarnIDs);

const yarnDetails = await Promise.all(
  yarnIDs.map(async (id) => {
    const yarnDetailsResponse = await fetch(`https://api.ravelry.com/yarns/${id}.json`, {
      method: "GET",
      headers: {
        "Authorization": "Basic " + btoa(username + ":" + password)
      },
    });
    if (!yarnDetailsResponse.ok) throw new Error("Failed to fetch yarns");
    return await yarnDetailsResponse.json();
  }
  )
)
console.log(yarnDetails);


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yarn" element={<Yarn />} />
          <Route path="/patterns" element={<Patterns />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/login" element={<Login />} />
          <Route path="/videotutorial" element={<VideoTutorial />} />
          <Route element={<AuthRoute />}>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}




export default App

