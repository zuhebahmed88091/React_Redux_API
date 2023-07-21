import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UsersContainer from './components/users';

function App() {
  return (
    <Provider store={store}>
      <UsersContainer />
    </Provider>
  );
}

export default App;
