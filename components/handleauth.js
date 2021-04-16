const { MoneyButtonClient } = require('@moneybutton/api-client')

//onst { MoneyButtonClient } = require('@moneybutton/api-client')
export default async function handleAuthuser () {
    const client = new MoneyButtonClient('cd8072b2a8b1557cc7ad71d96d038658');
    client.handleAuthorizationResponse();
    const { id, name } = await client.getIdentity()
    console.log(`The id is ${id} and the name is ${name}`)
    const profile = await client.getUserProfile(id)
    console.log(JSON.stringify(profile))
}