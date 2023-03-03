import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './profile.css';

function Profile () {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de requisição assíncrona para carregar os posts
    setTimeout(() => {
      setPosts([
        { id: 1, topic: 'frontend', content: 'Meu primeiro post de frontend!' },
        { id: 2, topic: 'backend', content: 'Meu primeiro post de backend!' },
        { id: 3, topic: 'fundamentos', content: 'Meu primeiro post de fundamentos!' },
        { id: 4, topic: 'frontend', content: 'Meu segundo post de frontend!' },
        { id: 5, topic: 'ciencia', content: 'Meu primeiro post de ciência da computação!' },
        { id: 6, topic: 'backend', content: 'Meu segundo post de backend!' },
      ]);
    }, 1000);
  }, []);

  const filteredPosts = selectedTopic === 'all'
    ? posts
    : posts.filter(post => post.topic === selectedTopic);

  return (
    <>
      <Header/>
    <div className="profile">
      <div className="profile-header">
        <div className="profile-photo">
          {/* foto de Perfil do estudante de acordo com o perfil */}
          <img
            src="https://placeimg.com/64/64/people/1"
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="profile-info">
          {/* Aqui entram as informações do perfil, como nome, bio etc. */}
          <h1>John Doe</h1>
          <p>Estudante Trybe Turma {`20`}</p>
          <p>Módulo atual {`Backend`}</p>
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-sidebar">
          <ul className="topics-list">
            <li
              className={selectedTopic === 'all' ? 'active' : ''}
              onClick={() => setSelectedTopic('all')}
            >
              Todos os tópicos
            </li>
            <li
              className={selectedTopic === 'fundamentos' ? 'active' : ''}
              onClick={() => setSelectedTopic('fundamentos')}
            >
              Fundamentos
            </li>
            <li
              className={selectedTopic === 'frontend' ? 'active' : ''}
              onClick={() => setSelectedTopic('frontend')}
            >
              Frontend
            </li>
            <li
              className={selectedTopic === 'backend' ? 'active' : ''}
              onClick={() => setSelectedTopic('backend')}
            >
              Backend
            </li>
            <li
              className={selectedTopic === 'ciencia' ? 'active' : ''}
              onClick={() => setSelectedTopic('ciencia')}
            >
              Ciência da Computação
            </li>
          </ul>
        </div>
        <div className="profile-posts">
          {filteredPosts.length === 0 && (
            <p className="no-posts">Nenhum post encontrado</p>
          )}
          {filteredPosts.map(post => (
            <div className="container-post" key={post.id}>
              <div className="content-post">
                <p className="post-text">{post.content}</p>
                <img alt="" src="" className='post-image'></img>
              </div>
              <div className="container-post-button">
                <button className="post-button">Editar</button>
                <button className="post-button">Excluir</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;