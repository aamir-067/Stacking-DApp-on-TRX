import { NavBar, Footer } from "./Components";
import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const { toastStatus } = useSelector(state => state);

  console.log(toastStatus);


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
        autoClose={5000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
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
