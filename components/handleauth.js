import { STATUS_UPDATE_CATEGORY } from 'coingecko-api';

const { MoneyButtonClient } = require('@moneybutton/api-client')

//onst { MoneyButtonClient } = require('@moneybutton/api-client')
export default async function handleAuthuser () {
    const client = new MoneyButtonClient('1c098ac11f57bef8e51899f75c03c34e');

    
    client.handleAuthorizationResponse();

    //const refreshToken = client.getRefreshToken();

    const { id } = await client.getIdentity()
    const status = await fetch( 'https://kyc.blockpass.org/kyc/1.0/connect/banach_group/refId/'+id, {
        headers: {
            'Authorization': '73e01eca9e43ed8039e302484954fec3'
        },
    });
    //console.log(`The id is ${id} and the name is ${name}`)
    const profile = await client.getUserProfile(id)
    const balance = await client.getBalance(id)
    // const payments = await client.getOwnPayments(id)
    const profileJSON = JSON.stringify(status)
    console.log(status);

    return {
        profile: profile,
        balance: balance,
        // status: status
        // payments: payments
        //refreshToken: refreshToken
    }
}