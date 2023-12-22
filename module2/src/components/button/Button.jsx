const Button = (props) => {
  function handleClick (e){
    const delta = e.target.dataset.delta;
    props.funct(parseInt(delta)); 

  }  
  
  return (
      <button onClick={handleClick} data-delta={props.delta}>
        {props.text}
      </button>
    )
  }

  export default Button;