
import ChangePages from "@components/ChangePages";
import styles from "@styles/AboutMe.module.css";
import ProjectsList from "Containers/ProjectsScroll/nuevo";

const AboutMe = () => {


  return (
    <div className={styles.AboutMe_container}>
      <h1>AboutMe</h1>
      <div className={styles.AboutMe2_container}>
        <ChangePages className={styles.AboutMe} />
        <ProjectsList />
      </div>
      <style jsx global>
        {`
          #pageProjects {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default AboutMe;
