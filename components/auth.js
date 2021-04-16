const { MoneyButtonClient } = require('@moneybutton/api-client')

//onst { MoneyButtonClient } = require('@moneybutton/api-client')
export default function Authuser () {
    const client = new MoneyButtonClient('1c098ac11f57bef8e51899f75c03c34e');
    //client.setRefreshToken(refreshToken)
    client.requestAuthorization('auth.user_identity:read users.profiles:read users.profiles.email:read','http://localhost:3000');
    //client.handleAuthorizationResponse();
    //const refreshToken = client.getRefreshToken();
    // console.log(refreshToken);
}