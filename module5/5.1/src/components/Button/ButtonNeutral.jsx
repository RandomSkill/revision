import { useContext } from "react"
import {Context as FeedbackContext} from "../../contexts/FeedBackContext"

const ButtonNeutral =()=>{
    const {neutral,handleNeutralButton}= useContext(FeedbackContext);

    return(
        <p>neutral : {neutral} <button onClick={handleNeutralButton}> add neutral vote</button></p>
    )
}
export default ButtonNeutral