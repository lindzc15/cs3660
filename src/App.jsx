import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'



function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my home page!</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Welcome to my CS3660 project. I am going to create a web
        application dedicated to all things knit/crochet. Users will
        be able to buy, sell, and trade patterns and yarn with other users.
        It will also serve as a place for users to post tutorial videos.
      </p>
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

