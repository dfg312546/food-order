import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import ContextProvider from './store/contextProvider';


import RootPage from './components/RootPage';
import HomeContent from '../src/components/HomePage/layout/HomeContent'
import QA from './components/Q&A-Page/Q&A';
import Error from './components/Error';
import ContactForm from '../src/components/ContactPage/contactForm'
import LogIn from '../src/components/AuthPage/logIn'
import SignUp from './components/AuthPage/signUp';
import MapApp from './components/StorePage/map';
import Profile from './components/ProfilePage/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomeContent />},
      { path: '/Q&A', element: <QA />},
      { path: '/contact',element: <ContactForm/>},
      { path: '/login',element: <LogIn />},
      { path: '/signUp',element: <SignUp />},
      { path: '/offlineStore',element: <MapApp />},
      { path: '/profile',element: <Profile />}
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

