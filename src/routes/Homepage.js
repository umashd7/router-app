import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="App-header">Welcome to Home page</div>
      <Outlet/>
    </>
  );
}

export default HomePage;
