import React, { useState, useEffect, Navigate } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import './login.css';


const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [isLogged, setIsLogged] = useState(false);
const [failedTryLogin, setFailedTryLogin] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const endpoint = '/login';

      // const { token, user } = await requestLogin(endpoint, { email, password });

      // localStorage.setItem('user', JSON.stringify({ token, ...user }));
      setIsLogged(true);
    } catch (error) {
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
          <Logo/>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
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
              type="submit"
              className="login-button"
            >
            Entrar
            </button>
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