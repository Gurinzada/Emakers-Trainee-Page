const Input = ({typeOf, placeholder, id, className}) => {
    return(
        <input type={typeOf} placeholder={placeholder} id={id} className={className} />
    )
}

export default Input