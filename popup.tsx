import React, { useEffect } from 'react';

const Popup: React.FC = () => {
  useEffect(() => {
    // Ouvrir un nouvel onglet avec une page vide contenant "Hello World"
    chrome.tabs.create({ url: 'data:text/html,<h1>Hello World</h1>' });
  }, []);

  return null; // Pas besoin de rendre quoi que ce soit dans la page contextuelle (popup)
};

export default Popup;
