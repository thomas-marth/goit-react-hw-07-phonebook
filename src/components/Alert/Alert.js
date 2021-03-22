import React from "react";
import styles from "./Alert.module.css";

const Alert = () => {
  return (
    <div className={styles.alert}>
      <p>⚠️ Такой контакт уже есть в списке</p>
    </div>
  );
};

export default Alert;
