import { useState, useEffect } from "react";

export default function useLocalArray(key) {
  const [localStore, setLocalStore] = useState([]);

  useEffect(() => {
    const local = localStorage.getItem(key);
    const localArray = local
      ? local.split(",,").map((string) => JSON.parse(string))
      : [];
    setLocalStore(localArray);
  }, [key]);

  function setBasket(newBasket) {
    localStorage.setItem(
      "basket",
      newBasket.map((object) => JSON.stringify(object)).join(",,")
    );
    setLocalStore(newBasket);
  }

  return [localStore, setBasket];
}
