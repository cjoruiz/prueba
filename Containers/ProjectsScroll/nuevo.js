import { useState, useEffect } from "react";
import image from "next/image";
import styles from "@styles/ProjectsScroll.module.css";
import Link from "next/link";

const ProductLista2 = () => {
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
    <section className={styles.scroll_main_container}>
      <div className={styles.slider}>
        {myProjectList[1]=() => (
          <Link href={project.URL}>
            <a className={styles.scroll_main_projects}>
              <img
                src={`img/${project.nameImage}`}
                height={150}
                width={180}
                alt={project.name}
              />
              <p> {project.title} </p>
            </a>
          </Link>
        )}
      </div>
    </section>
  );
};

export default ProductLista2;
