
import { ProviderWarper as FeedbackProviderWrapper } from "/src/contexts/FeedBackContext"
import App from "./App"
const AppLoader=()=>{
    return(
<FeedbackProviderWrapper>
    <App/>
</FeedbackProviderWrapper>
    )
}
export default AppLoader