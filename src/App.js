import './App.css';
import store from './redux/store/index';
import Todos from './components/Todos'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Todos />
      </div>
    </Provider>
  );
}

export default App;
