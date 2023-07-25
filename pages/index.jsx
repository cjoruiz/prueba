import ChangePages from '@components/ChangePages';
import styles from '@styles/Home.module.scss';
import image from "next/image";
import ProjectsList from 'Containers/ProjectsScroll';
import chemms from "../public/img/cheems.png";


const home = () => {

  const textHome = `Hi`

  return (
    <main className={styles.home_main}>
      <section className={styles.home_main_container}>
        <div className={styles.home_main_text}>
          <img
            src="https://s2.coinmarketcap.com/static/img/coins/200x200/24988.png"
            height={150}
            width={180}
          />
          <h1>{textHome}</h1>
          <h1>I'm Cristian</h1>
          <p className={styles.home_main_text_descrption}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            repudiandae autem alias. Eligendi at accusantium soluta quisquam
            blanditiis possimus, tenetur error .
          </p>
          </div>
        <ChangePages />
      </section>
      {/* <ProjectsList /> */}
      <section className="home-main-images"></section>
    </main>
  );
}

export default home