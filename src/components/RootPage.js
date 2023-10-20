import MainNavigation from "./MainNavigation";
import { Outlet } from 'react-router-dom';

function RootPage () {
  return (
    <>
    <MainNavigation />
    <main>
      <Outlet />
    </main>
    </>
  )
};

export default RootPage;