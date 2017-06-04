import React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { SamplePage } from './samplePage';
const render = () => {
  ReactDOM.render(
  <AppContainer><SamplePage/></AppContainer>, document.querySelector('[app]'));
}

render();

if (module.hot) { module.hot.accept(render); }