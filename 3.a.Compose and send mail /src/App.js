import LoginSignup from "./components/LoginSignup/LoginSignup";
import HomePage from "./components/Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector((state) => state.auth.userAuth.isLogin);
  console.log(isLogin);
  return (
    <>
      <Routes>
        {!isLogin && (
          <Route path={"/"} element={<LoginSignup></LoginSignup>}></Route>
        )}
        {isLogin && <Route path={"/home"} element={<HomePage />}></Route>}
        {!isLogin && <Route path={"*"} element={<LoginSignup />}></Route>}
        {isLogin && <Route path={"*"} element={<HomePage />}></Route>}
      </Routes>
    </>
  );
}

export default App;
