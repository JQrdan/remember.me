import React from 'react';
import PropTypes from 'prop-types';

const Links = ({items}) => {
  let jsx = [];
  let first = true;

  items.forEach(item => {
    if (!first) {
      jsx.push(' | ')
    } else {
      first = false;
    };

    jsx.push(<a href={item.link}>{item.text}</a>);
  });

  return <div className={'links'}>{jsx}</div>;
};

Links.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string
  }))
};

export default Links;