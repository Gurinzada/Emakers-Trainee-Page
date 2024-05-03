import Img from "../Common/Img";
import styles from "../../Styles/UserPage.module.scss"

export default function UserPage(){
    return(
        <div>
            <header className={styles.HeaderWrapper}>
                <div className={styles.HeaderImages}>
                    <div>
                        <Img srcImg={"../../../assets/Logo_lateral_semfundo 2.svg"}/>
                    </div>
                    <nav className={styles.NavIcons}>
                        <Img srcImg={"../../../assets/glass.svg"} className={styles.Icons}/>
                        <div className={styles.personContainer}>
                            <Img srcImg={"../../../assets/image 3.svg"} className={`${styles.Icons}`}/>
                            <div className={styles.OrageBall}></div>
                        </div>
                        <Img srcImg={"../../../assets/Rectangle 8.svg"}/>
                    </nav>
                </div>

                <div className={styles.PhotoContainer}>
                        <Img srcImg={"../../../assets/Ellipse 1.png"} className={styles.MyPhoto}/>
                        <Img srcImg={"../../../assets/Botão de Editar.png"} className={styles.EditIcon}/>       
                </div>
            </header>
        </div>
    )
}