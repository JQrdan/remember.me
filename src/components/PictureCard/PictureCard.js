import React, {useState} from 'react';
import AnimateHeight from 'react-animate-height';

const PictureCard = ({pictureURL, age, comment, author}) => {
  const [height, updateHeight] = useState(0);

  const toggleHeight = () => {
    updateHeight(height === 0 ? 'auto' : 0);
  }

  return (
    <div className={'pictureCard'} onMouseEnter={toggleHeight} onMouseLeave={toggleHeight}>
      <div className={'picture'}>
        <img src={pictureURL} />
      </div>
      <div className={'overlay'}>
        <div className={'age'}>{age} Years Old</div>
        <AnimateHeight
          duration={200}
          height={height}
        >
          <div className={'comment'}>
            <p className={'commentText'}>{comment}</p>
            <p className={'commentAuthor'}>{author}</p>
          </div>
        </AnimateHeight>        
      </div>
    </div>
  )
}

export default PictureCard;
