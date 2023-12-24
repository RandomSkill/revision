const FeedBackButton =(props)=>{
function handleClick(){
    const x = props.cpt+1;
    props.funct(x);
}
return (
    <button onClick={handleClick}>{props.text} </button>
)
}
export default FeedBackButton;