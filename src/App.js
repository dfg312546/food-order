import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

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
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App;
