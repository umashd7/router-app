import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="App-header">Welcome to {process.env.REACT_APP_ENV} Home page
      </div>
      <Outlet/>
    </>
  );
}

export default HomePage;
