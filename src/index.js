import ReactDOM from "react-dom";
import './index.css'
import { approuter } from "./App";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";




const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<StrictMode><RouterProvider router={approuter} /></StrictMode>)