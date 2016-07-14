import React from 'react';
import { render } from 'react-dom';
import FilterableChampionsTable from './components/champions/FilterableChampionsTable';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CHAMPIONS } from './components/champions/mockChampions.js';


render(
  <div>
    <FilterableChampionsTable champions={CHAMPIONS}/>
  </div>,
  document.getElementById('app')
);
