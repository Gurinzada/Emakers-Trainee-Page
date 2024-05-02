const Form = ({methodType, className, id, children}) => {
    return(
    <form method={methodType} className={className} id={id}>
        {children}
    </form>
    )
}


export default Form