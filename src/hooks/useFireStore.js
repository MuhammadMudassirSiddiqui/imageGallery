import { useState, useEffect } from "react";
import { fireStore } from "../firebase/config";

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = fireStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapShot) => {
        let document = [];
        snapShot.forEach((doc) => {
          document.push({ id: doc.id, ...doc.data() });
        });
        setDocs(document);
      });

    return async () => await unsub();
  }, [collection]);

  return { docs };
};

export default useFireStore;
