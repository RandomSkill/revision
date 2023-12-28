import {  useContext } from "react"
import {Context as FeedbackContext} from "../../contexts/FeedBackContext"
const ButtonReset=()=>{
   const {reset} = useContext(FeedbackContext)
return(
    <button onClick={reset}> Rest score</button>
)
}
export default ButtonReset