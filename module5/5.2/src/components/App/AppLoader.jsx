import {OpinionContext as OpinionContextWarpper} from "src/contexts/opinionContext"
const AppLoader = ()=>{
    return
    <OpinionContextWarpper>
    <App/>
    </OpinionContextWarpper>
}


export default AppLoader