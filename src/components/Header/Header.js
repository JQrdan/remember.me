import React from 'react';

const Header = ({name}) => {
  return (
    <div className={'header'}>
      <p><span className={'breadCrumbStart'}>remember.me/</span><span className={'breadCrumbContinue'}>{name}</span></p>
    </div>
  )
};

export default Header;