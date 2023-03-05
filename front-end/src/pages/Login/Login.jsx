import React, { useState, useEffect, Navigate } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Modal from '../../components/Modal/Modal';
import './login.css';
import { userList } from "../../helpers/userList";
import FormErrorMessage from '../../components/error/ErrorMessage';
import Swal from "sweetalert2";


const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [isLogged, setIsLogged] = useState(false);
const [failedTryLogin, setFailedTryLogin] = useState(false);
const [formValidation, setFormValidation] = useState({});
	let validationMessages = {};

	function emailValidate() {
		let result = false;

		if (email === "") {
			validationMessages.email = "Campo Obrigatório!";
		} else if (userList.find((user) => user.email === email)) {
			validationMessages.email = "";
			result = true;
		} else {
			validationMessages.email = "Email não encontrado!";
		}
		return result;
	}

	function passwordValidate() {
		let result = false;

		if (password === "") {
			validationMessages.password = "Campo Obrigatório!";
		} else if (
			userList.find(
				(user) => user.password === password && user.email === email
			)
		) {
			validationMessages.password = "";
			result = true;
		} else {
			validationMessages.password = "Senha incorreta!";
		}
		return result;
	}


  function handleLogin() {
  
      const validLogin = emailValidate();
		  const validPassword = passwordValidate();

		  setFormValidation(validationMessages);

		  if (validPassword && validLogin) {
			  Swal.fire({
				  icon: "success",
				  title: "Bem Vindo ao Tryitter",
				  showConfirmButton: false,
				  timer: 1500,
			  });

			setTimeout(() => {
				window.location.href = "/home";
        setIsLogged(true);
			}, 1500);
		}
    else {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) return <Navigate to="/home" />;

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-heading">
          <h1>Seja Bem-Vindo ao Tryitter</h1>
          <Logo />
        </div>
        {/* <form className="login-form" onSubmit={handleLogin}> */}
        <form className="login-form">
          <div className="form-field">
            <label htmlFor="email-address">Endereço de email</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Endereço de email"
              />
              <FormErrorMessage
						    errors={formValidation}
						    fieldName="email"
					    />
          </div>
          <div className="form-field">
            <label htmlFor="password">Senha</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Senha"
              />
              <FormErrorMessage
						    errors={formValidation}
						    fieldName="password"
					    />
          </div>
          <div className="form-field">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="form-checkbox"
            />
            <label htmlFor="remember-me" className="form-checkbox-label">
            Lembrar-me
            </label>
          </div>
          <div className="form-field form-submit">
            <button
              type="button"
              className="login-button"
              onClick={() => { handleLogin() }}
            >
            Entrar
            </button>
            
            <Modal />
            
            <Link to="/" className="forgot-password-link">
            Esqueceu a senha?
            </Link>
          </div>
        </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;