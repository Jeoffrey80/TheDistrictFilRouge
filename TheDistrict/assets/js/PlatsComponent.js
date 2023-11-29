import React from 'react';

const PlatsComponent = ({ plats }) => (
  <div>
    <h1>Nos Plats</h1>
    <ul>
      {plats.map((plat) => (
        <li key={plat.id}>{plat.nom}</li>
      ))}
    </ul>
  </div>
);

export default PlatsComponent;
