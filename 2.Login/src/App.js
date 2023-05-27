import LoginSignup from "./components/LoginSignup/LoginSignup";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./components/Pages/Home/HomePage";

function App() {
  const isLogin = useSelector((state) => state.auth.userAuth.isLogin);
  console.log(isLogin);
  return (
    <>
      <Routes>
        {!isLogin && (
          <Route path={"/"} element={<LoginSignup></LoginSignup>}></Route>
        )}
        <Route path={"/home"} element={<HomePage />}></Route>
        <Route path={"*"} element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
