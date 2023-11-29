import { NavBar, Footer } from "./Components";
import { Outlet } from 'react-router-dom'
function App() {


  return (
    <>
      <div className="app">
        <div className="mb-40 min-h-screen">
          <NavBar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
