const { MoneyButtonClient } = require('@moneybutton/api-client')

//onst { MoneyButtonClient } = require('@moneybutton/api-client')
export default async function Authuser () {
    const client = new MoneyButtonClient('1c098ac11f57bef8e51899f75c03c34e')
    client.requestAuthorization('auth.user_identity:read','http://localhost:3000')
    setTimeout(client.handleAuthorizationResponse(), 100);
}