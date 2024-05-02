const Select = ({id, children, className}) => {
    return (
        <select id={id} className={className} >
            {children}
        </select>
    )
}

export default Select