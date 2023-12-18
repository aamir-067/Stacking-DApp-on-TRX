import { NavBar, Footer } from "./Components";
import { Outlet } from 'react-router-dom'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { autoConnect } from "./utils";
import { useEffect } from "react";
function App() {

  
  useEffect(()=>{
		// for automatically connecting a wallet if its not locked
		autoConnect();
	},[]);


  return (
      <div className="overflow-hidden">
        <div className="app lg:min-h-screen">
          <NavBar />
          <Outlet />
        </div>
        {/* // ? footer */}
        <Footer />
        <ToastContainer
        position="bottom-left"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </div>

  );
}

export default App;
