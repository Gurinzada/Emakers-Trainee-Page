import Title from "../Common/Title"
import BntLink from "../Common/BntLink"
import styles from "../../Styles/LoginPage.module.scss"
import FormLogin from "../Parts/FormLogin"


function LoginPage () {

    return (
        <main className={styles.ContainerLogin}>
            <FormLogin/>
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