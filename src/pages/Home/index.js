import { NavTop, OpenPanel, Cart } from "../../components";
import { Body, LeftPane, RightPane } from "./styles";
import { KING, QUEEN, FULL, DOUBLE } from "./constants";

const Home = () => {
  return (
    <>
      <NavTop />
      <Body>
        <LeftPane>
          <OpenPanel data={KING} />
          <OpenPanel data={QUEEN} />
          <OpenPanel data={FULL} />
          <OpenPanel data={DOUBLE} />
        </LeftPane>
        <RightPane>
          <Cart />
        </RightPane>
      </Body>
    </>
  );
};

export default Home;
