import React, { useEffect, useState } from "react";

export default function With_async_await() {
  const [products, setProducts] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/products/1");
      const data = await res.json();
      setProducts(data);
    })();
  }, []);
  return <div>{JSON.stringify(products)}</div>;
}
