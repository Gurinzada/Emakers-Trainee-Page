import React, { useState, useEffect } from 'react';
import styles from '../../Styles/RegisterPage.module.scss';
import Img from '../Common/Img';
import Form from '../Common/Form';
import Input from '../Common/Input';
import Label from '../Common/Label';
import Select from '../Common/Select';
import Title from '../Common/Title';
import A from "../Common/A"
import BntLink from '../Common/BntLink';
import useTogglePassword from '../../hooks/usePasswordToggle';

const RegisterPage = () => {
    const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth)
    const {type, focusInputPassword, blurPassword} = useTogglePassword()

    useEffect(() => {
        const handleResize = () => {
            setLarguraDaTela(window.innerWidth);
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const textoDoInput = larguraDaTela >= 720 ? 'Selecionar imagem' : 'Escolha sua imagem'

    return (
        <main className={styles.Container}>
            <Form className={styles.FormWrapper}>
                <div className={styles.Content}>
                    <Title textForTitle={`Registrar`} className={styles.Title} />
                </div>
                <div className={styles.Content}>
                    <Label textForLabel={`Nome`} labelFor={`UserName`} />
                    <Input id={`UserName`} typeOf={`text`} className={styles.Inputs} />
                </div>
                <div className={styles.Content}>
                    <Label textForLabel={`E-mail`} labelFor={`UserEmail`} />
                    <Input id={`UserEmail`} typeOf={`email`} className={styles.Inputs} />
                </div>
                <div className={styles.Content}>
                    <Label textForLabel={`Senha`} labelFor={`UserPassword`} />
                    <input type={type} className={styles.Inputs} id='UserPassword' onFocus={focusInputPassword}  onBlur={blurPassword}/>
                </div>
                <div className={styles.Content}>
                    <Label textForLabel={`Confirmar Senha`} labelFor={`UserPasswordConfirmation`} />
                    <Input id={`UserPasswordConfirmation`} typeOf={`password`} className={styles.Inputs} />
                </div>
                <div className={styles.ContentRow}>
                    <div>
                        <Label textForLabel={`Sexo`} labelFor={`Gender`} className={styles.LabelSex} />
                        <Select id={`Gender`} className={styles.InputsMinus}>
                            <option value="" disabled selected></option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </Select>
                    </div>
                    <div>
                        <Label labelFor={`UserImg`} textForLabel={`Imagem`} />
                        <Label labelFor={`UserImg`} textForLabel={textoDoInput} className={styles.customFileUpload} />
                        <Input id={`UserImg`} typeOf={'file'} className={styles.InputFile} />
                    </div>
                </div>
                <div className={styles.ContentBnt}>
                    <BntLink TextBnt={`Registrar-se`} className={styles.BntPurple} to={`/social`}/>
                    <A path={"/login"} textFor={`Já possui conta?`}/>
                </div>
            </Form>
            <div className={styles.WrapperIcon}>
                <Img srcImg={"../../../assets/Logo.svg"} />
                <p className={styles.Paragraph}>Venha fazer parte da maior rede social também!</p>
            </div>
        </main>
    )
}

export default RegisterPage
