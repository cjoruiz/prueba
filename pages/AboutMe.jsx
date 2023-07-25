
import ChangePages from "@components/ChangePages";
import styles from "@styles/AboutMe.module.scss";
import Example from "Containers/ProjectsScroll/Example";

const AboutMe = () => {


  return (
    <div className={styles.AboutMe_container}>
      <Example/>
      <h1>AboutMe</h1>
      <div className={styles.AboutMe2_container}>
        <ChangePages className={styles.AboutMe} />
      </div>

    </div>
  );
};

export default AboutMe;
