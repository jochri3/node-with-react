import React from 'react';
import './post.style.scss';

export default function PostItem({ titre, contenu }) {
  return (
    <li>
      <span className='post-title'>{titre}</span> - {contenu}
    </li>
  );
}
