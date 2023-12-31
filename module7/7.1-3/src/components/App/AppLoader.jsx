import {ProviderWrapper as AnecdoteContext}  from "contexts/AnecdoteContext.jsx"
import App from "./App"
import {BrowserRouter as Router } from "react-router-dom"
const AppLoader =()=>{

    return(
        <Router>
        <AnecdoteContext>
       
            <App />
           
        </AnecdoteContext>
        </Router>
    )
}


export default AppLoader