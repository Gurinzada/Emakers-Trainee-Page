import styles from '../../Styles/RegisterPage.module.scss';
import Img from '../Common/Img';
import FormRegister from '../Parts/FormRegister';

const RegisterPage = () => {
    

    return (
        <main className={styles.Container} >
            <FormRegister/>
            <div className={styles.WrapperIcon}>
                <Img srcImg={"../../../assets/Logo.svg"} />
                <p className={styles.Paragraph}>Venha fazer parte da maior rede social também!</p>
            </div>
        </main>
    )
}

export default RegisterPage
