const { MoneyButtonClient } = require('@moneybutton/api-client')

//onst { MoneyButtonClient } = require('@moneybutton/api-client')
export default async function handleAuthuser () {
    const client = new MoneyButtonClient('cd8072b2a8b1557cc7ad71d96d038658');
    client.handleAuthorizationResponse();

    const refreshToken = client.getRefreshToken();

    const { id } = await client.getIdentity()
    //console.log(`The id is ${id} and the name is ${name}`)
    const profile = await client.getUserProfile(id)
    const balance = await client.getBalance(id)
    // const payments = await client.getOwnPayments(id)
    // const profileJSON = JSON.stringify(payments)
    // console.log(profileJSON);

    return {
        profile: profile,
        balance: balance,
        // payments: payments
        refreshToken: refreshToken
    }
}