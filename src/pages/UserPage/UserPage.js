import React from 'react';
import { Header, NamePlate, Links } from '../../components';
import { useFetchUser, useFetchPhotos } from '../../hooks';
import PictureCard from '../../components/PictureCard/PictureCard';

const removeSpaceFromText = text => {
  return text.replace(' ', '');
};

const generatePhotoGrid = (pictures) => {
  let jsx = [];

  pictures.forEach(picture => {
    jsx.push(
      <PictureCard
        pictureURL={picture.pictureURL}
        age={picture.age}
        comment={picture.comment}
        author={picture.author}
      />
    )
  });

  return jsx;
};

const UserPage = ({user}) => {
  const { name, picture, birthYear, deathYear } = useFetchUser(user);
  const pictures = useFetchPhotos(user);

  const links = [
    {text: 'Send Flowers', link: 'www.google.co.uk'},
    {text: 'Funeral Procession', link: 'www.google.co.uk'},
  ]

  return (
    <div className={'userPage'}>
      <Header name={removeSpaceFromText(name)} />
      <div className={'body'}>
        <NamePlate name={name} birthYear={birthYear} deathYear={deathYear} />
        <Links items={links} />
      </div>
      <div className={'pictureLibrary'}>
        {generatePhotoGrid(pictures)}
      </div>
    </div>
  )
};

export default UserPage;
