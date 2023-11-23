// Navbar.js
import React from 'react';
import '../css/navBar.css'; // Importez le fichier CSS

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Ajoutez la classe "navbar" pour appliquer le style CSS */}
      <a href="/">Accueil</a>
      <a href="/connection">Connection</a>
     </nav>
  );
}




export default Navbar;
