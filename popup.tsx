import React, { useEffect } from 'react';

const Popup: React.FC = () => {
  useEffect(() => {
    // Ouvrir un nouvel onglet avec une page vide contenant "Hello World"
    chrome.tabs.create({ url: 'data:text/html,<h1>Hello World</h1>' });
    fetchData();
  }, []);

  return null; // Pas besoin de rendre quoi que ce soit dans la page contextuelle (popup)
};

async function fetchData() {
  try {
    const response = await fetch('https://api.openloot.com/v2/market/items/in-game?page=1&pageSize=50&sort=name%3Aasc');
    const data = await response.json();
    console.log(data); // Log the response data
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default Popup;