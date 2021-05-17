const { MoneyButtonClient } = require('@moneybutton/api-client')
import {useRouter} from "next/router";
<<<<<<< HEAD
//onst { MoneyButtonClient } = require('@moneybutton/api-client')
=======

>>>>>>> 5ed2c98ff56ac1519f342ec92e35496eae7ea306
export default async function handleAuthuser () {
    const router = useRouter()
    // const client = new MoneyButtonClient('1c098ac11f57bef8e51899f75c03c34e');
    const client = new MoneyButtonClient('cd8072b2a8b1557cc7ad71d96d038658');
	const router = useRouter()
    
    client.handleAuthorizationResponse().then(router.push('/home', undefined));
    
<<<<<<< HEAD
    client.handleAuthorizationResponse();
    router.push('/home', undefined);
    
=======
>>>>>>> 5ed2c98ff56ac1519f342ec92e35496eae7ea306
    //const refreshToken = client.getRefreshToken();
}