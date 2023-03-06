import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import "./header.css"
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Header({ userName, isLoggedIn }) {
  const [logado, setLogado] = useState(false);

  const navigate = useNavigate();

  function redirectPerfilPage() {
    navigate('/profile');
  }

  function handleLogin() {
    navigate('/login');
  }

  function handleLogout() {
    
    Swal.fire({
      title: 'Você deseja sair?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Sim`,
      denyButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login');
      } else if (result.isDenied) {
        Swal.fire('Sua sessão continua ativa', '', 'info')
      }
    })
  }

  useEffect (() => {
    const localUser = localStorage.getItem('formData');
    console.log(localUser, 'localUser')

    if (localUser.length > 0) {
      setLogado(true);
    }
  }, []);


  return (
    <header className="tryitter-header">
      <div className="logo">
        <Logo/>
      </div>
    
      {/* botão onClick deverá redirecionar o usuário para o perfil dele */}
      {logado ? <button className="user-perfil" onClick={() => redirectPerfilPage()}>Meu Perfil </button> : null}
      <div className="user-info">
        {logado ? (
          <>
            {/* Aqui precisaremos exibir o nome do usuário logado */}
            <div className="username">{userName}</div>
            <button className="login-logout-button" onClick={() => handleLogout()}>Sair</button>
          </>
        ) : (
          <button className="login-logout-button" onClick={() => handleLogin()}>Entrar</button>
        )}
      </div>
    </header>
  );
}

export default Header;


