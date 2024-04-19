import styles from '../../Styles/RegisterPage.module.scss'
import Img from './Img'
import Button from './Button'
import Form from './Form'
import Input from './Input'
import Label from './Label'
import Link from './Link'
import Select from './Select'
import Title from './Title'

const RegisterPage = () => {
    return(
        <main className={styles.Container}>
            <Form className={styles.FormWrapper}>
                <div className={styles.Content}>
                    <Title textForTitle={`Registrar`} className={styles.Title} />
                </div>
                <div className={styles.Content}>
                    <Label textForLabel={`Nome`} labelFor={`UserName`}/>
                    <Input  id={`UserName`} typeOf={`text`} className={styles.Inputs}/>
                </div>
                <div className={styles.Content}>
                    <Label textForLabel={`E-mail`} labelFor={`UserEmail`} />
                    <Input id={`UserEmail`} typeOf={`email`} className={styles.Inputs}/>
                </div>
                <div className={styles.Content}>
                    <Label textForLabel={`Senha`} labelFor={`UserPassword`}/>
                    <Input id={`UserPassword`} typeOf={`password`} className={styles.Inputs}/>
                </div>
                <div className={styles.Content}>
                    <Label textForLabel={`Confirmar Senha`} labelFor={`UserPasswordConfirmation`}/>
                    <Input id={`UserPasswordConfirmation`} typeOf={`password`} className={styles.Inputs}/>
                </div>
                <div className={styles.ContentRow}>
                    <div>
                        <Label textForLabel={`Sexo`} labelFor={`Gender`}/>
                        <Select id={`Gender`} className={styles.InputsMinus}>
                            <option value="" disabled selected></option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </Select>
                    </div>
                    <div>
                        <Label labelFor={`UserImg`} textForLabel={`Imagem`}/>
                        <Label labelFor={`UserImg`} textForLabel={`Selecionar imagem`} className={styles.customFileUpload}/>
                        <Input id={`UserImg`} typeOf={'file'} className={styles.InputFile}/>
                    </div>
                </div>
                <div className={styles.ContentBnt}>
                    <Button textForBnt={`Registrar-se`} className={styles.BntPurple}/>
                    <Link textForLink={`Já possui conta?`} />
                </div>
            </Form>
            <div className={styles.WrapperIcon}>
                <Img srcImg={"../../../assets/Logo.svg"}/>
                <p>Venha fazer parte da maior rede social também!</p>
            </div>
        </main>
    )
}


export default RegisterPage