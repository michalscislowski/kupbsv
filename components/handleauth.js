const { MoneyButtonClient } = require('@moneybutton/api-client')

//onst { MoneyButtonClient } = require('@moneybutton/api-client')
export default async function handleAuthuser () {
    const client = new MoneyButtonClient('1c098ac11f57bef8e51899f75c03c34e');
    client.handleAuthorizationResponse();
    const { id, name } = await client.getIdentity()
    console.log(`The id is ${id} and the name is ${name}`)
    const profile = await client.getUserProfile(id)
    console.log(JSON.stringify(profile.email))
}