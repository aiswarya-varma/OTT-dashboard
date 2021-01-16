import './App.css';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import Container from './components/Container';

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
