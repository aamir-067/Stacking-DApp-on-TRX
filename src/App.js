import { NavBar, Footer } from "./Components";
import { Outlet } from 'react-router-dom'
import {ToastContainer} from "react-toastify";
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
      
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        limit={2}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
    />
    </>
  );
}

export default App;
