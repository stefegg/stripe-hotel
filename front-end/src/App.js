import "./App.css";
import { Home, Checkout } from "./pages";
import { ModalSite, NavTop } from "./components";
import { useRecoilState } from "recoil";
import atoms from "./atoms";
import { ThemeProvider } from "styled-components";

function App() {
  const [showCheckout] = useRecoilState(atoms.checkout);
  const [theme] = useRecoilState(atoms.theme);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavTop />
        {!showCheckout ? <Home /> : <Checkout />}
        <ModalSite />
      </div>
    </ThemeProvider>
  );
}

export default App;
