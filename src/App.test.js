import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Shop />, div);
  ReactDOM.unmountComponentAtNode(div);
});
