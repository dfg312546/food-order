import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import ContextProvider from './store/contextProvider';

import RootPage from './Pages/RootPage';
import HomePage from './Pages/HomePage';
import QAPage from './Pages/q&aPage';
import ErrorPage from './Pages/Error';
import ContactPage from '../src/Pages/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />},
      { path: '/Q&A', element: <QAPage />},
      { path: '/contact',element: <ContactPage />},
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
