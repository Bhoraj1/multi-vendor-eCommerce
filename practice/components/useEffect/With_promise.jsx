import React, { useEffect, useState } from "react";

export default function With_promise() {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/1`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return <div>{JSON.stringify(products)}</div>;
}
