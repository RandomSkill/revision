const FeedBackButton =(props)=>{
function handleClick(){
    props.funct();
}
return (
    <button onClick={handleClick}>{props.text} </button>
)
}