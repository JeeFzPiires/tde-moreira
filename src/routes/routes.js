import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PrivateRoute } from "."
import Home from "../pages/Home"
import Login from "../pages/Login"

export const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<PrivateRoute />}>
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}