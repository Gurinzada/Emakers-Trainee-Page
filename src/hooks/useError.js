import { useState } from "react"

const useError = () => {
    const [error, setError] = useState(false)


    const handleError = () => {
        setError(true)
    }

    const handleErrorToFalse = () => {
        setError(false)
    }

    return {error, handleError, handleErrorToFalse}
}

export default useError