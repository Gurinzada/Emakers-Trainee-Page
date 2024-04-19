const Label = ({labelFor, textForLabel, className}) => {
    return(
    <label htmlFor={labelFor} className={className}>{textForLabel}</label>
    )
}

export default Label