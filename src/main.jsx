
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { APPProvider } from './a-UseContext/Store.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <APPProvider>
      <App />
    </APPProvider>
  </>
)
