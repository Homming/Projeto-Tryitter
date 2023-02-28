import React, { useState } from 'react';
import './search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const topics = [
    { id: 1, label: 'Todos os tópicos' },
    { id: 2, label: 'Frontend' },
    { id: 3, label: 'Backend' },
    { id: 4, label: 'Ciência da Computação' },
  ];

  const handleQueryChange = event => {
    setQuery(event.target.value);
  };

  const handleTopicClick = topic => {
    setSelectedTopic(topic);
  };

  const handleSearchClick = () => {
    // Aqui você pode implementar a lógica para realizar a pesquisa
    console.log(`Pesquisando por: ${query}, tópico: ${selectedTopic}`);
  };

  return (
    <div className="search">
      <div className="search-input">
        <input
          type="text"
          placeholder="Pesquisar por assuntos ou pessoas ou turmas"
          value={query}
          onChange={handleQueryChange}
        />
      <button className="search-button" onClick={handleSearchClick}>
        Pesquisar
      </button>
      </div>
      <div className="search-filters">
        <div className="search-topic">
          <span className="search-label">Filtrar por:</span>
          <ul className="search-topic-list">
            {topics.map(topic => (
              <li
                key={topic.id}
                className={selectedTopic === topic.id ? 'active' : ''}
                onClick={() => handleTopicClick(topic.id)}
              >
                {topic.label}
              </li>
            ))}
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default Search;
