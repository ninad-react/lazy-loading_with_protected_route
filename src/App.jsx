import { Suspense, lazy, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./layout/Header"
import Home from "./pages/Home"
// import About from "./pages/About"
import Login from "./pages/Login"
// import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./pages/ProtectedRoute"

const Dashboard = lazy(() => import("./pages/Dashboard"))
const About = lazy(() => import("./pages/About"))


function App() {

  const[loggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/about" element={
          <Suspense>
            <About />
          </Suspense>
          } />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} loggedIn={loggedIn}/>} />

        <Route element={<ProtectedRoute loggedIn={loggedIn}/>}>
            <Route path="/dashboard" element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Dashboard />
            </Suspense>
            } />
        </Route>
      </Routes>
    </>
  )
}
   
export default App
