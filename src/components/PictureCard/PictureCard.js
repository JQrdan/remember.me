import React from 'react';

const PictureCard = ({pictureURL, age, comment, author}) => {
  return (
    <div className={'pictureCard'}>
      <div className={'picture'}>
        <img src={pictureURL} />
      </div>
      <div className={'overlay'}>
        <div className={'age'}>{age} Years Old</div>
        <div className={'comment'}>
          <p className={'commentText'}>{comment}</p>
          <p className={'commentAuthor'}>{author}</p>
        </div>
      </div>
    </div>
  )
}

export default PictureCard;
