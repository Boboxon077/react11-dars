import { collection } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
// import { getDocs } from "firebase/firestore";
import { db } from "../firebase/FireBaseConfig";

export function useCollection(c) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const ref = collection(db, c);

  useEffect(() => {
    const unsup = onSnapshot(ref, (snapshot) => {
      const reults = [];
      snapshot.docs.forEach((doc) => {
        reults.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(reults);
    });
    return () => unsup();
  }, [c]);

  return { documents, error };
}
