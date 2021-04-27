

export default async function handleLocalAuthuser () {
    const client = new MoneyButtonClient('1c098ac11f57bef8e51899f75c03c34e');
    client.handleAuthorizationResponse();

    //const refreshToken = client.getRefreshToken();

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
        //refreshToken: refreshToken
    }
}