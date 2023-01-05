import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const MyFarmPage = () => {
  // See: https://firebase.google.com/docs/web/learn-more#config-object
  const firebaseConfig = {
    // ...
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return <div></div>;
};

export default MyFarmPage;
