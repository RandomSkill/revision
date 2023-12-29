import {ProviderWrapper as OpinionContextWarpper} from "contexts/OpinionContext"
import App from "./App"
const AppLoader = ()=>{
    return(
         <OpinionContextWarpper>
        <App/>
        </OpinionContextWarpper>)
   
}


export default AppLoader