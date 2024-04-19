const Link = ({hrefFor, textForLink}) => {
    return(
    <a href={hrefFor} target="_blank" rel="noopener noreferrer">{textForLink}</a>
    )
}

export default Link