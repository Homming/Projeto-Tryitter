import React, { useState } from 'react';
import './homePage.css';
import mockData from '../../helpers/mockData';
import NavBar from '../../components/Header/Header';
import Search from '../../components/Search/Search';

const HomePage = () => {
  const [posts, setPosts] = useState(mockData);
  const [newPost, setNewPost] = useState('');
  const [selectedOption, setSelectedOption] = useState("Fundamentos");

  function handleChange(event) {
    const value = event.target.value;
    setSelectedOption(value);
  }

  const options = ['Fundamentos', 'Front-End', 'Back-End', 'Ciências da Computação'];

  const optionElements = options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

  

  const handleNewPostChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleNewPostSubmit = (event) => {
    event.preventDefault();
    const newId = posts.length + 1;
    const newPostData = {
      id: newId,
      name: 'John Doe',
      username: 'johndoe',
      avatar: 'https://placeimg.com/64/64/people/1',
      message: newPost,
      timestamp: new Date().getTime(),
      likes: 0,
      comments: [],
      module: selectedOption,
    };
    setPosts([newPostData, ...posts]);
    setNewPost('');
  };

  return (
    <>
    <NavBar />
    <Search/>
    <div className="homePage">
      <div className="content">
       
        <div className="timeline">
          <div className="postForm">
            <img
              src="https://placeimg.com/64/64/people/1"
              alt="Avatar"
              className="avatar"
            />
            <form onSubmit={handleNewPostSubmit}>
              <textarea
                placeholder="O que está acontecendo?"
                value={newPost}
                onChange={handleNewPostChange}
                maxLength={280}
                required
              ></textarea>
              <select value={selectedOption} onChange={handleChange}>
                <option value="">Selecione uma opção</option>
                  {optionElements}
              </select>

              <div className="formActions">
                <button type="submit" className="tweetButton">
                  Tryit
                </button>
              </div>
            </form>
          </div>
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <img src={post.avatar} alt="Avatar" className="avatar" />
              <div className="postContent">
                <div className="postHeader">
                  <div className="name">{post.name}</div>
                  <div className="username">@{post.username}</div>
                  <p>{post.module}</p>
                  <div className="timestamp">
                    {new Date(post.timestamp).toLocaleString()}
                  </div>
                </div>
                <div className="message">{post.message}</div>
                <div className="postFooter">
                  <div className="actions">
                    <button className="actionButton">
                      <i className="fa fa-comment"></i>
                    </button>
                    <button className="actionButton">
                      <i className="fa fa-retweet"></i>
                    </button>
                    <button className="actionButton">
                      <i className="fa fa-heart"></i>
                    </button>
                    <button className="actionButton">
                      <i className="fa fa-upload"></i>
                    </button>
                  </div>
                  <div className="likes">{post.likes} likes</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sidebar">
          <div className="whoToFollow">
            <div className="title">Quem você segue</div>
            <div className="users">
              <div className="user">
                <img

                  src="https://placeimg.com/64/64/people/2"
                  alt="Avatar"
                  className="avatar"
                />
                <div className="userInfo">
                  <div className="name">John Doe</div>
                  <div className="username">@johndoe</div>
                </div>
                <button className="followButton">Follow</button>
              </div>
              <div className="user">
                <img

                  src="https://placeimg.com/64/64/people/3"
                  alt="Avatar"
                  className="avatar"
                />
                <div className="userInfo">
                  <div className="name">John Doe</div>
                  <div className="username">@johndoe</div>
                </div>
                <button className="followButton">Follow</button>
              </div>
              <div className="user">
                <img
                 
                  src="https://placeimg.com/64/64/people/4"
                  alt="Avatar"
                  className="avatar"
                />
                <div className="userInfo">
                  <div className="name">John Doe</div>
                  <div className="username">@johndoe</div>
                </div>
                <button className="followButton">Follow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;

