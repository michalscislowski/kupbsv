const { MoneyButtonClient } = require('@moneybutton/api-client')

//onst { MoneyButtonClient } = require('@moneybutton/api-client')
export default async function handleAuthuser () {
    const client = new MoneyButtonClient('1c098ac11f57bef8e51899f75c03c34e');

    
    client.handleAuthorizationResponse();

    //const refreshToken = client.getRefreshToken();

}