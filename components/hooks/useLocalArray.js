import { useState, useEffect } from "react";

export default function useLocalArray(key) {
    const [localStore, setLocalStore] = useState(null);

    useEffect(() => {
        const local = localStorage.getItem(key)
        const localArray = local ? local.split(",,").map((string, index) => JSON.parse(string)) : [];
        setLocalStore(localArray);
    }, [key]);

    return [localStore, setLocalStore];
}