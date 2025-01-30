import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";



function Home() {
  return (
    <MainLayout>
      <h1>Home</h1>
    </MainLayout>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}




export default App

