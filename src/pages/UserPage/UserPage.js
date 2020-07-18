import React from 'react';
import { Header, NamePlate, Links } from '../../components';
import { useFetchUser } from '../../hooks';

const removeSpaceFromText = text => {
  return text.replace(' ', '');
};

const UserPage = ({user}) => {
  const { name, picture, birthYear, deathYear } = useFetchUser(user);

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
    </div>
  )
};

export default UserPage;
