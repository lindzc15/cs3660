import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import About from "./pages/About";



function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my home page!</p>
    </div>
  )
}



function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>Something super terrible has happened and the page you
        are looking for doesn't even exist{":("}
      </p>
    </div>
  )
}



function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function NavBar() {
  return (
    <nav>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/about">About</Link>
      </button>
    </nav>
  );
}


export default App

