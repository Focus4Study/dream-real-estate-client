import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useOffersSale from "../../../Hooks/useOffersSale";
import useAuth from "../../../Hooks/useAuth";



const CheckoutForm = (id) => {
    const [error, setError] = useState()
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionID] = useState()
    const { user } = useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [, offersSale] = useOffersSale()
    const propertyPrice = offersSale.find(item => item._id === id.id)?.offer
    const buyingProperty = offersSale.find(item => item._id === id.id)


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: propertyPrice })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })

    }, [axiosSecure, propertyPrice])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe) {
            return
        }
        const card = elements.getElement(CardElement)
        if (!card) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setError('')
        }
        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details:{
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })
        if (confirmError) {
            console.log(paymentIntent,'confirmError');
        }
        else{
            console.log('paymentIntent',paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionID(paymentIntent.id)
                const payment ={
                    email: user.email,
                    price: propertyPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    offerId: buyingProperty._id,
                    offerPropertyId: buyingProperty.property_id,
                    status:'pending'    
                }
                const response = await axiosSecure.post('/payments',payment)
                .then(res=>{
                    if (res.data.insertedId) {
                       axiosSecure.patch(`/sold/${buyingProperty.property_id}`)
                       .then(res=>{
                        console.log(res);
                       })
                    }
                })
            console.log('payment',response);
        }}
    }



    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={
                    {
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4'
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        }
                    }
                }>
            </CardElement>
            <button className="btn btn-primary" type="submit" disabled={!stripe || !clientSecret}>Pay</button>
            <p className="text-red-500">{error}</p>
            {transactionId && <p className="text-green-600">Your transaction Id : {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;