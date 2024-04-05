import Stripe from "stripe";
import { NextRequest, NextResponse} from 'next/server'


const stripe = new Stripe(process.env.SECRET_KEY!)


export async function POST(req: NextRequest , res: NextResponse) {

    const payload = await req.text()
    const response = JSON.parse(payload)

    const sig = req.headers.get('Stripe-Signature');

    const dateTime = new Date(response?.created + 1000).toLocaleDateString();
    const timeString = new Date(response?.created + 1000).toLocaleDateString();

    try {
        let event = stripe.webhooks.constructEvent(payload, sig!, process.env.STRIPE_WEBHOOK_KEY! )   
        
        console.log(response)
        console.log('event:', event.type);

        return NextResponse.json({status: 'success', event: event.type})
        
    } catch (error) {
        return NextResponse.json({status: 'Failed', error})
    }

}
