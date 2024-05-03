import Img from "../Common/Img";
import Title from "../Common/Title";
import styles from "../../Styles/UserPage.module.scss";


export default function UserPage() {

  return (
    <div className={styles.PrincipalWrapper}>
      <header className={styles.HeaderWrapper}>
        <div className={styles.HeaderImages}>
          <div>
            <Img srcImg={"../../../assets/Logo_lateral_semfundo 2.svg"} />
          </div>
          <nav className={styles.NavIcons} id="NavBar">
            <Img srcImg={"../../../assets/glass.svg"} className={styles.Icons} />
            <div className={styles.personContainer}>
                <Img srcImg={"../../../assets/image 3.svg"} className={styles.Icons} />
                <div className={styles.OrageBall}></div>
            </div>
            <Img srcImg={"../../../assets/Rectangle 8.svg"} className={styles.IconUnique} />
            <Img className={styles.Opc} srcImg={"../../../assets/Opcs3.svg"}/> 
          </nav>
        </div>

        <div className={styles.PhotoContainer}>
          <Img srcImg={"../../../assets/Ellipse 1.png"} className={styles.MyPhoto} />
          <Img srcImg={"../../../assets/Botão de Editar.png"} className={styles.EditIcon} />
        </div>

        <div>
          <Img srcImg={"../../../assets/Botão de Editar.png"} className={styles.EditIcon2} />
        </div>
      </header>
      <main className={styles.MainArea}>
        <section className={styles.InfoUser}>
          <div>
            <Title textForTitle={`Caio Henrique Noronha, 19`} className={styles.UserName} />
          </div>
          <div className={styles.UserBio}>
            <p>Exemplo de bio;</p>
            <p>Lorem ipsum dolor sit amet;
                Aenean in cursus dolor.
                Aliquam vel tortor non justo pulvinar placerat a 
                nec ex. </p>
          </div>
        </section>
        <section className={styles.Gallery}>
          <Img srcImg={`../../../assets/PumpkinBoy.png`} className={styles.GalleryPhoto} />
          <Img srcImg={`../../../assets/Finn_01.png`} className={styles.GalleryPhoto} />
          <Img srcImg={`../../../assets/Finn_02.png`} className={styles.GalleryPhoto} />
        </section>
      </main>
    </div>
  );
}
