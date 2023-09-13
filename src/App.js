import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import ContextProvider from './store/contextProvider';

import RootPage from './Pages/RootPage';
import HomePage from './Pages/HomePage';
import QAPage from './Pages/q&aPage';
import ErrorPage from './Pages/Error';
import ContactPage from '../src/Pages/ContactPage';
import LogInPage from '../src/Pages/LogInPage';
import SignUpPage from '../src/Pages/SignUpPage';
import MapApp from './components/StorePage/map';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />},
      { path: '/Q&A', element: <QAPage />},
      { path: '/contact',element: <ContactPage />},
      { path: '/login',element: <LogInPage />},
      { path: '/signUp',element: <SignUpPage />},
      { path: '/offlineStore',element: <MapApp />},
    ]
  }
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </QueryClientProvider>
  )
}

export default App;
