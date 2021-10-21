import "./App.css";
import { Home, Checkout } from "./pages";
import { ModalSite, NavTop } from "./components";
import { useRecoilState } from "recoil";
import atoms from "./atoms";

function App() {
  const [showCheckout] = useRecoilState(atoms.checkout);
  return (
    <div>
      <NavTop />
      {!showCheckout ? <Home /> : <Checkout />}
      <ModalSite />
    </div>
  );
}

export default App;
