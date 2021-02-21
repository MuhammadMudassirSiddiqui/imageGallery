import { useState, useEffect } from "react";
import firebase from "firebase";

import { projectStorage, fireStore } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [err, setErr] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // reference

    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on(
      "state_change",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

        setProgress(percentage);
      },
      (err) => {
        setErr(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        fireStore.collection("images").add({
          url,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
    );
  }, [file]);

  return { progress, err, url };
};

export default useStorage;
