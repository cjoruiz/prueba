import ChangePages from "@components/ChangePages";
import ProjectsList from "components/ProjectList";
import styles from "@styles/Projects.module.scss"

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
