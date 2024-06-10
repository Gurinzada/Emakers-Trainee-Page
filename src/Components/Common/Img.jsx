const Img = ({srcImg, altImg, className, somethingToClick}) => {
    return(
        <img src={srcImg} alt={altImg} className={className} onClick={somethingToClick}/>
    )
}

export default Img