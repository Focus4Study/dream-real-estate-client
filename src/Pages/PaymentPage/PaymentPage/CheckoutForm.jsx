import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useOffersSale from "../../../Hooks/useOffersSale";



const CheckoutForm = (id) => {
    const [error, setError] = useState()
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [,offersSale]= useOffersSale()
    const propertyPrice = offersSale.find(item => item._id === id.id)?.offer
    console.log(propertyPrice);

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price:propertyPrice})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })

    },[axiosSecure,propertyPrice])

    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(!stripe){
            return
        }
        const card = elements.getElement(CardElement)
        if(!card){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error', error);
            setError(error.message)
        }
        else{
            console.log('payment method', paymentMethod);
            setError('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
            options={
                {
                    style:{
                        base:{
                            fontSize:'16px',
                            color:'#424770',
                            '::placeholder':{
                                color:'#aab7c4'
                            },
                            },
                            invalid:{
                                color:'#9e2146',
                            },
                    }
                }
            }>
            </CardElement>
            <button className="btn btn-primary" type="submit" disabled={!stripe || !clientSecret}>Pay</button>
            <p className="text-red-500">{error}</p>
        </form>
    );
};

export default CheckoutForm;