import { GlobalStyles } from './styles/globalStyles'
import AppProvider from './context'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyles />
      </BrowserRouter>
    </div>
  );
}

export default App;
