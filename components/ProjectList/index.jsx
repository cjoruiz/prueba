import { useState, useEffect } from "react";
import image from "next/image";
import styles from "@styles/ProjectsScroll.module.scss";
import Link from "next/link";
import data from "database/data";

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
    <>
      {myProjectList.length > 0 ? (
        <section className={styles.scroll_main_container}>
          {myProjectList.map((project) => (
            <a className={styles.scroll_main_projects}>
              <Link href={project.URL}>
                <section>
                  <img
                    src={`img/${project.nameImage}`}
                    height={150}
                    width={180}
                    alt={project.name}
                  />
                  <h3> {project.title} </h3>
                </section>
              </Link>
              <h3>git hub</h3>
            </a>
          ))}
        </section>
      ) : (
        <section className="loading">cargando ...</section>
      )}
    </>
  );
};

export default ProductLista;

