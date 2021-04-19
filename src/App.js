import React from 'react';
import Clock from './components/Clock';
import FolderFunc from './components/FolderFunc';
import Weather from './components/Weather';
import AutoFunc from './components/AutoFunc';

const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

const App = () => (
  <div>
    <FolderFunc folders={folders} />
    <AutoFunc names={names} />
    <Weather />
    <Clock />
  </div>
);

export default App;
