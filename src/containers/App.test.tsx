import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainPage from './MainPage';

const onRequestRobots = () => ({});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainPage onRequestRobots={onRequestRobots} />, div);
  ReactDOM.unmountComponentAtNode(div);
});