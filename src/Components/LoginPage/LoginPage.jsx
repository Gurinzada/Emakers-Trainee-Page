import Button from "../Common/Button"
import Form from "../Common/Form"
import Img from "../Common/Img"
import Input from "../Common/Input"
import Label from "../Common/Label"
import Title from "../Common/Title"
import BntLink from "../Common/BntLink"
import styles from "../../Styles/LoginPage.module.scss"

function LoginPage () {
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
                            <Input id={`PasswordLogin`} typeOf={`password`} className={styles.PasswordInput}/>
                            <Img srcImg={"../../assets/OpenEye.svg"} className={styles.Eye}/>
                        </div>
                       
                    </div>

                    <div className={styles.ContainerBntLogin}>
                        <Button textForBnt={`Entrar`} className={styles.LoginBnt}/>
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