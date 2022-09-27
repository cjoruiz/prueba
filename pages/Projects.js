import ChangePages from "@components/ChangePages";
import ProjectsList from "Containers/ProjectsScroll/rerer";
import styles from "@styles/Projects.module.css"

const Projects = () => {
  return (
    <div className={styles.projects_container}>
      <div className={styles.divApi}>
        <ProjectsList />
      </div>
      <ChangePages className={styles.profile_link} />
      <style jsx global>
        {`
          #pageAbout {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
