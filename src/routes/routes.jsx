import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import LeftBar from "../components/leftbar";

export const ROUTES = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<LeftBar/>}/>
        </>
    )
)