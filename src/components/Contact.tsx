import React from 'react';
import '../styles.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contato</h2>
        <p>Utilize esse formulário para as tirar suas dúvidas, deixar sugestões e/ou fazer alguma reclamação.</p>
        <p>Nossa equipe irá analisar e assim que possível, entraremos em contato!</p>
        <form>
  <div className="form-group">
    <label htmlFor="name">Seu Nome</label>
    <input type="text" id="name" name="name" />
  </div>
  <div className="form-group">
    <label htmlFor="email">Seu Email</label>
    <input type="email" id="email" name="email" />
  </div>
  <div className="form-group">
    <label htmlFor="phone">Seu Telefone</label>
    <input type="tel" id="phone" name="phone" />
  </div>
  <div className="form-group-flex">
    <div className="form-group">
      <label htmlFor="city">Cidade</label>
      <input type="text" id="city" name="city" />
    </div>
    <div className="form-group">
      <label htmlFor="state">Estado</label>
      <input type="text" id="state" name="state" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="address">Endereço</label>
    <input type="text" id="address" name="address" />
  </div>
  <div className="form-group">
    <label htmlFor="subject">Assunto: </label>
    <select id="subject" name="subject">
      <option value="Opção 1">Locação simples</option>
      <option value="Opção 2">Locação frota</option>
      <option value="Opção 3">Reclamação/Sugestão</option>
      <option value="Opção 4">Dúvida</option>
      <option value="Opção 5">Elogio</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="message">Mensagem</label>
    <textarea id="message" name="message"></textarea>
  </div>
  <button type="submit">Enviar</button>
</form>


      </div>
      
      <div className="contact-info">
        <h2>Informações</h2>
        <p>Rua: Cônego Lima Sucupira n° 790</p>
        <p>Cep: 60741-255, Serrinha - Fortaleza-CE</p>
        <p>Email SAC: sac@primeplus.com.br</p>
      </div>
    </div>
  );
};

export default Contact;
