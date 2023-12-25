import "./Header.css"

const Header =(props)=>{
    return(
        <header>
        <img src={props.pp} />
            <h1>{props.course}</h1>
        
        </header>
    );
}

export default Header;