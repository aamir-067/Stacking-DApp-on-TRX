import { NavLink } from 'react-router-dom'
import { makeMagnet, mouseFollower} from 'sheryjs';
const Home = () => {

  mouseFollower();
  makeMagnet(".magnet");

  return (
    <div className="w-full flex justify-center">
        <div className="flex flex-col md:mt-40 mt-10 justify-center w-11/12 md:w-9/12">
          <h1 className="mt-8 animate font-bold text-center text-slate-300 tracking-tight text-3xl md:text-5xl lg:text-7xl">
            We care about your future
          </h1>
          <p className="lg:mt-8 mt-4 text-md lg:text-lg text-slate-400 text-center p-6">
          Adding TRX tokens to the liquidity pool earns one extra token per TRX stacked, based on 5 minutes of total pooled TRX, encouraging participation and rewarding liquidity provision
          </p>
          <div className='my-6 flex justify-center'>
              <NavLink
                to={"/operations"}
                className="rounded-md magnet px-3 py-2.5 text-lg font-semibold text-white ease-in-out duration-75" 
              >
                Stack TRX now
              </NavLink>
            </div>
        </div>
    </div>

  )
}

export default Home