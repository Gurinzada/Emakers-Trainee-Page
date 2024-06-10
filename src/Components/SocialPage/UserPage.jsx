import Img from "../Common/Img";
import styles from "../../Styles/UserPage.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function UserPage() {
  const [userInfos, setUserInfos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get(`/users/${id}`);
        setUserInfos([response.data]);
        console.log(userInfos);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleClick = () => {
    showIcons === false ? setShowIcons(true) : setShowIcons(false)
  }

  return (
    <div className={styles.PrincipalWrapper}>
      <header className={styles.HeaderWrapper}>
        <div className={styles.HeaderImages}>
          <div>
            <Img srcImg={"../../../assets/Logo_lateral_semfundo 2.svg"} />
          </div>
          <nav className={styles.NavIcons} id="NavBar">
            <Img
              srcImg={"../../../assets/glass.svg"}
              className={styles.Icons}
            />
            <div className={styles.personContainer}>
              <Img
                srcImg={"../../../assets/image 3.svg"}
                className={styles.Icons}
              />
              <div className={styles.OrageBall}></div>
            </div>
            <Img
              srcImg={"../../../assets/Rectangle 8.svg"}
              className={styles.IconUnique}
            />
            <Img className={styles.Opc} srcImg={"../../../assets/Opcs3.svg"} />
          </nav>
        </div>

        <div className={styles.PhotoContainer}>
          <Img
            srcImg={"../../../assets/Ellipse 1.png"}
            className={styles.MyPhoto}
          />
          <Img
            srcImg={"../../../assets/Botão de Editar.png"}
            className={styles.EditIcon}
          />
        </div>

        <div>
          <Img
            srcImg={"../../../assets/Botão de Editar.png"}
            className={styles.EditIcon2}
          />
        </div>
      </header>
      <main className={styles.MainArea}>
        <section className={styles.InfoUser}>
          <div>
            <h1 className={styles.UserName}>
              {userInfos.map((user) => user.name)}
            </h1>
          </div>
          <div className={styles.UserBio}>
            <p>Exemplo de bio;</p>
            <p>
              Lorem ipsum dolor sit amet; Aenean in cursus dolor. Aliquam vel
              tortor non justo pulvinar placerat a nec ex.{" "}
            </p>
          </div>
        </section>
        <section className={styles.Gallery}>
          <Img
            srcImg={`../../../assets/PumpkinBoy.png`}
            className={styles.GalleryPhoto}
          />
          <Img
            srcImg={`../../../assets/Finn_01.png`}
            className={styles.GalleryPhoto}
          />
          <Img
            srcImg={`../../../assets/Finn_02.png`}
            className={styles.GalleryPhoto}
          />
        </section>
      </main>
    </div>
  );
}
