import React from "react";
import styles from "./Input.module.css";

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  backgroundImage,
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required
      style={{ backgroundImage: backgroundImage }}
    />
  );
};

export default Input; // Exportando o componente Input.
