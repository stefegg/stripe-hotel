import { Button } from "../index";
import { Wrapper, Body, ButtonWrapper } from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";

const CartModal = ({ data }) => {
  const [cart, setCart] = useRecoilState(atoms.cart);
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  console.log(data, "------cart modal");
  const addToCart = () => {
    setCart(data);
    setShowSiteModal(null);
  };
  return (
    <Wrapper>
      <Body></Body>
      <ButtonWrapper>
        <Button text={"Yes"} onClick={() => addToCart()} />
        <Button text={"No"} onClick={() => setShowSiteModal(null)} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CartModal;
