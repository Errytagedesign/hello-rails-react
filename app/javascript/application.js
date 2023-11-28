import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import { Provider } from 'react-redux';
// import store from './Redux/Store/Store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
