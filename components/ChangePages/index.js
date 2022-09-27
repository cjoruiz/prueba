
import Link from "next/link";
import styles from "@styles/ChangePages.module.css";

const ChangePages = () => {


  return (
    <ul className={styles.profile_link}>
      <li id="pageAbout">
        <Link href="Projects/">
          <a>projects</a>
        </Link>
      </li>
      {/* <li id="pageProjects">
        <Link href="AboutMe/">
          <a>About me</a>
        </Link>
      </li> */}
    </ul>
  );
};

export default ChangePages;
