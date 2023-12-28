import { useContext } from "react"
import {Context as FeedbackContext} from "../../contexts/FeedBackContext"

const ButtonBad =()=>{
    const {bad,handleBadButton}= useContext(FeedbackContext);

    return(
        <p>bad : {bad} <button onClick={handleBadButton}> add bad vote</button></p>
    )

}
export default ButtonBad
