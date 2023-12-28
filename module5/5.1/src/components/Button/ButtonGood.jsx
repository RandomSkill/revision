import { useContext } from "react"
import {Context as FeedbackContext} from "../../contexts/FeedBackContext"

const ButtonGood =()=>{
    const {good,handleGoodButton}= useContext(FeedbackContext);

    return(
        <p>good : {good} <button onClick={handleGoodButton} > add good vote</button></p>
    )
}
export default ButtonGood