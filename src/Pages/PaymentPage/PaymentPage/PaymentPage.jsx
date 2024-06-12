import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";


//Load publish key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK)
const PaymentPage = () => {
    const {id} = useParams()
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm id={id}></CheckoutForm>
            </Elements>
            
        </div>
    );
};

export default PaymentPage;