import React from 'react';
import { Link } from 'react-router-dom';
import './home.style.scss';

export default function index() {
  return (
    <div>
      <h1 className='titre-h1'>Bienvenu et Welcome</h1>
      <h3>
        <Link to='/posts'>Voir la liste des posts</Link>
      </h3>
    </div>
  );
}
