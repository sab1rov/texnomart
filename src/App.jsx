import { Route, Routes } from "react-router"
import { routes } from "./utils/routes"
import { Footer, Header } from "./components"


function App() {

  return (
    <>
      <Header />
      <Routes>
        {
          routes.map(item => (
            <Route path={item.path} element={item.element} key={item.id} />
          ))
        }
      </Routes>
      <Footer />
    </>
  )
}

export default App
