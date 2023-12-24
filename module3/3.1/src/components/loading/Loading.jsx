const Loading =(props) => {
  setTimeout(props.funct(false),3000);
  
    return(
        <>The App Is Loading</>
    )
}

export default Loading 