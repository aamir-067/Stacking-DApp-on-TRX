import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import { Home, Error, Dashboard, Stack} from "../Components";
import App from "../App";
export const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path="/operations" element={<Stack/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Error/>}/>
    </Route>
))