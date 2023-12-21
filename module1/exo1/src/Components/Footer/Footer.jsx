import "./Footer.css"
const Footer = (props)=>{
    return(
        <p className="footer">
            Number of exercises {props.total}
        </p>
    )
}

export default Footer;