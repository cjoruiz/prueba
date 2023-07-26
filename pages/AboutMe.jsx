
import ChangePages from "@components/ChangePages";
import styles from "@styles/AboutMe.module.scss";

const AboutMe = () => {


  return (
    <div className={styles.AboutMe_container}>
      <ChangePages className={styles.AboutMe} />

      <style jsx global>
        {`
          #pageProjects {
            display: none;
          }
          #pageAbout {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default AboutMe;
