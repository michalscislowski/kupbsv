const { MoneyButtonClient } = require('@moneybutton/api-client')

//onst { MoneyButtonClient } = require('@moneybutton/api-client')
export default function Authuser () {
    const client = new MoneyButtonClient('cd8072b2a8b1557cc7ad71d96d038658');
    //client.setRefreshToken(refreshToken)
    client.requestAuthorization('auth.user_identity:read users.profiles:read users.profiles.email:read users.balance:read','https://kupbsv.vercel.app');
    //client.handleAuthorizationResponse();
    //const refreshToken = client.getRefreshToken();
    // console.log(refreshToken);
}