import Form from "../Common/Form"
import Img from "../Common/Img"
import Input from "../Common/Input"
import Label from "../Common/Label"
import Title from "../Common/Title"
import BntLink from "../Common/BntLink"
import styles from "../../Styles/LoginPage.module.scss"
import { useState } from "react"

function LoginPage () {

    const [EyeUrl, setUrl] = useState(`../../assets/OpenEye.svg`)
    const [type, setType] = useState(`password`)

    const handleClick = () => {
        if(EyeUrl === '../../assets/OpenEye.svg'){
            setUrl('../../../assets/eye-close-svgrepo-com.svg')
            setType('text')
        } else{
            setUrl('../../assets/OpenEye.svg')
            setType('password')
        }
    }
    return (
        <main className={styles.ContainerLogin}>
            <Form className={styles.FormLogin}>

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
                            <Input id={`LoginEmail`} typeOf={`email`}/>
                        </div>
                        <div className={styles.PasswordContainer}>
                            <Label labelFor={`PasswordLogin`} textForLabel={`Senha`}/>
                            <Input id={`PasswordLogin`} typeOf={type} className={styles.PasswordInput}/>
                            <img src={EyeUrl} alt="" className={styles.Eye} onClick={handleClick} id="Eye"/>
                        </div>
                       
                    </div>

                    <div className={styles.ContainerBntLogin}>
                        <BntLink TextBnt={`Entrar`} className={styles.LoginBnt} to={`/social`}/>
                    </div>
                </div>

            </Form>

            <div className={styles.ContainerGradient}>
                <div className={styles.TitleGradientContainer}>
                    <Title textForTitle={`Novo Aqui?`} className={styles.TitleGradient}/>
                </div>
                <div className={styles.TextGradientContainer}>
                    <p className={styles.TextGradient}>Registre-se e venha fazer parte da maior
                        rede social!
                    </p>
                </div>
                <div className={styles.BtnContainerGradient}>
                   <BntLink to={"/"} className={styles.BntGradient} TextBnt={`Registre-se`}/>
                </div>
            </div>
        </main>
    )
}

export default LoginPage