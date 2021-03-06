import { Provider } from 'react-redux';
import './App.css';
import Routes from './Routes'
import { store } from './store';

function App() {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
