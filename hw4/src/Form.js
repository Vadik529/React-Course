import React, { useState } from "react";
import EmailInput from "./EmailForm";
import PasswordInput from "./PasswordInput";
import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import "./styles.css";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [firstnameValid, setFirstnameValid] = useState(true);
  const [lastnameValid, setLastnameValid] = useState(true);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordValid(validatePassword(value));
  };

  const handleFirstnameChange = (event) => {
    const value = event.target.value;
    setFirstname(value);
    setFirstnameValid(validateFirstname(value));
  };

  const handleLastnameChange = (event) => {
    const value = event.target.value;
    setLastname(value);
    setLastnameValid(validateLastname(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (value) => {
    const emailRegex = validEmail;
    const isValid = emailRegex.test(value);
    setEmailValid(isValid);
    return isValid;
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,10}$/;
    const isValid = passwordRegex.test(value);
    setPasswordValid(isValid);
    return isValid;
  };

  const validateFirstname = (value) => {
    const isValid =
      value.length >= 2 && !/\d/.test(value) && /^[А-ЯЁA-Z]/.test(value);
    setFirstnameValid(isValid);
    return isValid;
  };

  const validateLastname = (value) => {
    const isValid =
      value.length >= 2 && !/\d/.test(value) && /^[А-ЯЁA-Z]/.test(value);
    setLastnameValid(isValid);
    return isValid;
  };

  const isFormValid =
    validEmail.test(email) &&
    /^(?=.*[A-Z])(?=.*\d).{6,10}$/.test(password) &&
    firstname.length >= 2 &&
    !/\d/.test(firstname) &&
    lastname.length >= 2 &&
    !/\d/.test(lastname) &&
    /^[А-ЯЁA-Z]/.test(lastname);

  return (
    <form onSubmit={handleSubmit} className="form">
      <EmailInput
        className="input"
        value={email}
        onChange={handleEmailChange}
        error={!emailValid && "Неправильный формат email"}
      />

      <PasswordInput
        className="input"
        value={password}
        onChange={handlePasswordChange}
        error={
          !passwordValid &&
          "Пароль должен содержать хотя бы 1 заглавную букву, 1 цифру, и быть от 6 до 10 символов в длину"
        }
      />

      <FirstNameInput
        className="input"
        value={firstname}
        onChange={handleFirstnameChange}
        error={
          !firstnameValid &&
          "Имя должно иметь как минимум 2 буквы и начинаться с заглавной"
        }
      />

      <LastNameInput
        className="input"
        value={lastname}
        onChange={handleLastnameChange}
        error={
          !lastnameValid &&
          "Фамилия должна иметь как минимум 2 буквы и начинаться с заглавной"
        }
      />

      <input
        className="sent"
        type="submit"
        value="Отправить"
        disabled={!isFormValid}
      />
    </form>
  );
}

export default Form;
