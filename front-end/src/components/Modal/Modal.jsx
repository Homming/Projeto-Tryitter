import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './modal.css';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [module, setModule] = useState('');
  const [classroom, setClassroom] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleModuleChange = (event) => setModule(event.target.value);
  const handleClassroomChange = (event) => setClassroom(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, module, classroom };
    console.log(formData); // ou envie os dados para o backend aqui
    setIsOpen(false);
  };

  const handleCadaster = () => {
    const formData = [{ name, email, module, classroom, password }];
    // console.log(formData); // ou envie os dados para o backend aqui
    localStorage.setItem('formData', JSON.stringify(formData));
    setIsOpen(false);

    Swal.fire({
      title: 'Estudante cadastrado com sucesso!',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  };

  return (
    <>
      <button className="modal-button" onClick={() => setIsOpen(true)}>Cadastrar</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close " onClick={() => setIsOpen(false)}>&times;</span>
            <h2>Cadastrar Estudante</h2>
            <form onSubmit={handleSubmit}>
              
            <div className="form-group">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />
              </div>

              <div className="form-group">
                <label htmlFor="module">Módulo:</label>
                <input type="text" id="module" value={module} onChange={handleModuleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="classroom">Turma:</label>
                <input type="text" id="classroom" value={classroom} onChange={handleClassroomChange} />
              </div>

              <div className="form-group">
                <label htmlFor="classroom">Informe uma senha:</label>
                <input type="password" id="classroom" value={password} onChange={handlePassword} />
              </div>

              <button className="modal-button" type="submit" onClick={ () => handleCadaster()}>Cadastrar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
