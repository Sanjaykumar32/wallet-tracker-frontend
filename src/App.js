import "./App.css";
import Table from "./components/Summary/Table";
import { Wallet } from "./components/WalletUi/Wallet";
import SignIn from "./components/LoginPage/SignIn";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from './components/SignupPage/SignUp'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp/>}></Route>
      <Route path='/already' element={<SignIn/>}></Route>
    </Routes>
    
    </BrowserRouter>

    
    </>
  );
}

export default App;
