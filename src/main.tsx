import ReactDOM from 'react-dom/client';
import App from './app/Routes/App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './app/redux/store.ts';
import { Provider } from 'react-redux';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>,
);
