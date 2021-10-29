import "./App.css";
import { Home, Checkout, SignUp } from "./pages";
import { ModalSite, NavTop } from "./components";
import { useRecoilState } from "recoil";
import atoms from "./atoms";
import { ThemeProvider } from "styled-components";

function App() {
  const [showCheckout] = useRecoilState(atoms.checkout);
  const [showSignUp] = useRecoilState(atoms.signUp);
  const [theme] = useRecoilState(atoms.theme);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavTop />
        {showCheckout && !showSignUp && <Checkout />}
        {!showCheckout && !showSignUp && <Home />}
        {showSignUp && !showCheckout && <SignUp />}
        <ModalSite />
      </div>
    </ThemeProvider>
  );
}

export default App;
