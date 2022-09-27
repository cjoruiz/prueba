import { useState, useEffect } from "react";
import image from "next/image";
import styles from "@styles/ProjectsScroll.module.scss";
import Link from "next/link";

const ProductLista = () => {
  const [myProjectList, setMyProductList] = useState([]);

  useEffect(() => {
    window
      .fetch("/api/myProjects")
      .then((res) => res.json())
      .then(({ data, length }) => {
        setMyProductList(data);
      });
  }, []);

  return (
    <section className={styles.scroll_projects_container}>
      <div className={styles.slider_projects}>
        {myProjectList.map((project) => (
          <div className={styles.scroll_projects_projects}>
            <img
              src={`img/${project.nameImage}`}
              height={250}
              width={250}
              alt={project.name}
            />
            <div className={styles.scroll_projects_projects_links}>
              <div className={styles.project_title_container}>
                <Link href={project.github}>
                  <a target="_blank">Github</a>
                </Link>
              </div>
              <div className={styles.project_title_container}>
                <Link href={project.URL} target="_blank">
                  <a target="_blank">{project.title}</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductLista;
