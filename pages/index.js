import ChangePages from '@components/ChangePages';
import styles from '@styles/Home.module.css';
import ProjectsList from 'Containers/ProjectsScroll';

const home = () => {

  const textHome = `Hi`

  return (
    <main className={styles.home_main}>
      <section className={styles.home_main_container}>
        <div className={styles.home_main_text}>
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