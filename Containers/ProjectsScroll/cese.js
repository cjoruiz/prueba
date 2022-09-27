import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
  const [avo, setAvo] = useState();
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    id &&
      window
        .fetch(`@pages/api/myProjects${id}`)
        .then((response) => response.json())
        .then(({ data }) => setAvo(data))
        .catch((err) => console.error(err.message));
  }, [id]);

  return (
    <section>
      <h1>page product</h1>
      <h3>{avo?.name}</h3>
      <p>{avo?.attributes.URL}</p>
    </section>
  );
};

export default ProductPage;
