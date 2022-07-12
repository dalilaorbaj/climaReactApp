import '../App.css';
import React from 'react';

export default function Error({mensaje}) {
    return (
      <div className='error'>{mensaje}</div>
);
}