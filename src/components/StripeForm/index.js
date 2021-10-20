import { Wrapper, CARD_OPTIONS } from "./styles";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "..";
import axios from "axios";

const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: "card",
  //     card: elements.getElement(CardElement),
  //   });
  //   if (!error) {
  //     try {
  //       const { id } = paymentMethod;
  //       const response = await axios.post("http://localhost:4000/payment", {
  //         amount: amount.amount,
  //         id,
  //       });
  //       if (response.data.success) {
  //         console.log("Successful Payment");
  //         setSuccess(true);
  //       }
  //     } catch (error) {
  //       console.log("Error", error);
  //     }
  //   } else {
  //     console.log(error.message);
  //   }
  // };
  return (
    <Wrapper>
      <form onSubmit={() => console.log("here")}>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <Button text="Pay Now" />
      </form>
    </Wrapper>
  );
};

export default StripeForm;
