import React from 'react';
import '../styles.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
<h1>Nos Contate</h1>
<p>Utilize esse formulário para as tirar suas dúvidas, deixar sugestões e/ou fazer alguma reclamação.<br />
Nossa equipe irá analisar e assim que possível, entraremos em contato!</p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Seu Nome</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Seu Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Assunto</label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="contact-info">
        <h3>Informações</h3>
        <p>Rua: Cônego Lima Sucupira n° 790</p>
        <p>Cep: 60741-255, Serrinha - Fortaleza-CE</p>
        <p>Email SAC: sac@primeplus.com.br</p>
      </div>
    </div>
  );
};

export default Contact;
