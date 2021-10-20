import { Button } from "../index";
import { Wrapper, Body, ButtonWrapper } from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";

const CartModal = ({ data }) => {
  // const [cart, setCart] = useRecoilState(atoms.cart);
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  return (
    <Wrapper>
      <Body></Body>
      <ButtonWrapper>
        <Button text={"Yes"} />
        <Button text={"No"} onClick={() => setShowSiteModal(null)} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CartModal;
