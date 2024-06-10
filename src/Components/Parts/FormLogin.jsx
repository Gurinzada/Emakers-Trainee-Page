import Label from "../Common/Label"
import Img from "../Common/Img"
import Title from "../Common/Title"
import styles from "../../Styles/LoginPage.module.scss"
import { useEffect, useState } from "react"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"
import useError from "../../hooks/useError"
import { useAuth } from "../Context/AuthProvider"

export default function FormLogin(){

    const [infosUser, setInfosUser] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [EyeUrl, setUrl] = useState(`../../assets/OpenEye.svg`)
    const [type, setType] = useState(`password`)
    const {error, handleError, handleErrorToFalse} = useError()
    const navigate = useNavigate()
    const {login} = useAuth()

    const handleClick = () => {
        if(EyeUrl === '../../assets/OpenEye.svg'){
            setUrl('../../../assets/eye-close-svgrepo-com.svg')
            setType('text')
        } else{
            setUrl('../../assets/OpenEye.svg')
            setType('password')
        }
    }

    useEffect(() => {
        const fectchUsersData = async() => {
            try {
                const response = await api.get("/users")
                setInfosUser(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(`Error fetching user data: `, error)
            }
        }

        fectchUsersData()
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            const find = infosUser.find((user) => user.email === email && user.password === password)
            if(find){
                navigate(`/social/${find.email}`)
                login(find)
            } else{
                handleError()
                setTimeout(() => {
                    handleErrorToFalse()
                },2500)
            }
        } catch (error) {
            console.log(`Something goes wrong`)
        }
    }

    return(
        <form className={styles.FormLogin} onSubmit={handleSubmit}>

            <div className={styles.ContentImg}>
                <Img srcImg={"../../../assets/Logo_lateral_secundaria 3.svg"} className={styles.Img}/>
            </div>

                <div className={styles.FieldLogin}>

                    <div className={styles.TitleContainerLogin}>
                        <Title textForTitle={`Entre em sua conta`} className={styles.TitleForm}/>
                    </div>

                    <div className={styles.InputContainer}>
                        <div className={styles.EmailContainer}>
                            <Label labelFor={`LoginEmail`} textForLabel={`Email`}/>
                            <input id={`LoginEmail`} type={`email`} value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className={styles.PasswordContainer}>
                            <Label labelFor={`PasswordLogin`} textForLabel={`Senha`}/>
                            <input id={`PasswordLogin`} type={type} className={styles.PasswordInput} value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <img src={EyeUrl} alt="" className={styles.Eye} onClick={handleClick} id="Eye"/>
                        </div>
                       
                    </div>

                    <div className={styles.ContainerBntLogin} style={{alignItems:"center", display:"flex",flexDirection:"column", gap:"0.5rem", justifyContent:"center"}}>
                        <button type="submit" className={styles.LoginBnt}>Entrar</button>
                        {error === true ? <span style={{color: "#ff3443"}}>Email ou senha incorretos</span>: null}
                    </div>
                </div>

            </form>

    )
}