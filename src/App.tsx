import React from 'react';
import './App.css';
const { useState } = React;
// next button で次を random に表示する


function App() {

  return (
    <div className="RandomPicker__choice">
      <span className="RandomPicker__choiceItem">{namesList[2]}</span>
    </div>
  );
}


const namesList = [
  'Marcelo',
  'Lizzette',
  'Pauline',
  'Fumiko',
  'Tomasa',
  'Bertha',
  'Antoinette',
  'Tianna',
  'Ammie',
  'Victorina',
  'Marlon',
  'Jules',
  'Arletha',
  'Ellyn',
  'Karol',
  'Corrin',
  'Josephine',
];

export default App;
