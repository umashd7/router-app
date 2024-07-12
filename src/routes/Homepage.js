import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="App-header">Welcome to Home page</div>
      <div> { `You are in ${process.env.REACT_APP_ENV} environment`} </div>
      <Outlet/>
    </>
  );
}

export default HomePage;
