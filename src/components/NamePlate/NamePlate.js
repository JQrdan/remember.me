import React from 'react';

const NamePlate = ({name, birthYear, deathYear}) => {
  return (
    <div className={'namePlate'}>
      <h1 className={'name'}>{name}</h1>
      <h2 className={'life'}>{birthYear}-{deathYear}</h2>
    </div>
  )
};

export default NamePlate;