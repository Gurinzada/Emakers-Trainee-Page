import useTogglePassword from '../../hooks/usePasswordToggle';
import A from "../Common/A"
import Label from '../Common/Label';
import Input from '../Common/Input';
import Title from '../Common/Title';
import api from '../../services/api';
import styles from '../../Styles/RegisterPage.module.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';


export default function FormRegister(){
    const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth)
    const {type, focusInputPassword, blurPassword} = useTogglePassword()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [gender, setGender] = useState("")
    const navigate = useNavigate()
    const {login} = useAuth()

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password !== passwordConfirm){
            return
        }

        try{
            const response = await api.post("/users", {
                name,
                email,
                password,
                gender
            })
            console.log(response.data)
            const id = response.data.email
            login(response.data)
            navigate(`/social/${id}`)
            

        } catch(err){
            console.log(`Something goes wrong `, err.status)
        }
    }
    return(
        <form className={styles.FormWrapper} onSubmit={handleSubmit}>
        <div className={styles.Content}>
            <Title textForTitle={`Registrar`} className={styles.Title} />
        </div>
        <div className={styles.Content}>
            <Label textForLabel={`Nome`} labelFor={`UserName`} />
            <input id={`UserName`} type='text' className={styles.Inputs} value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className={styles.Content}>
            <Label textForLabel={`E-mail`} labelFor={`UserEmail`} />
            <input id={`UserEmail`} type='email' className={styles.Inputs} value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className={styles.Content}>
            <Label textForLabel={`Senha`} labelFor={`UserPassword`} />
            <input type={type} className={styles.Inputs} id='UserPassword' onFocus={focusInputPassword}  onBlur={blurPassword} value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className={styles.Content}>
            <Label textForLabel={`Confirmar Senha`} labelFor={`UserPasswordConfirmation`} />
            <input id={`UserPasswordConfirmation`} type='password' className={styles.Inputs} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
        </div>
        <div className={styles.ContentRow}>
            <div>
                <Label textForLabel={`Sexo`} labelFor={`Gender`} className={styles.LabelSex} />
                <select id={`Gender`} className={styles.InputsMinus} value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="" disabled selected></option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            </div>
            <div>
                <Label labelFor={`UserImg`} textForLabel={`Imagem`} />
                <Label labelFor={`UserImg`} textForLabel={textoDoInput} className={styles.customFileUpload} />
                <Input id={`UserImg`} typeOf={'file'} className={styles.InputFile} />
            </div>
        </div>
        <div className={styles.ContentBnt}>
            <button type="submit" className={styles.BntPurple}>Registrar-se</button>
            <A path={"/login"} textFor={`Já possui conta?`}/>
        </div>
    </form>
    )
}