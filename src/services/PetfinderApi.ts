import axios from "axios";

export function login() {

    var bodyFormData = new FormData();

    bodyFormData.append('grant_type', 'client_credentials');

    bodyFormData.append('client_id', process.env.REACT_APP_PETFINDER_API_KEY!);

    bodyFormData.append('client_secret', process.env.REACT_APP_PETFINDER_SECRET_KEY!);


    return axios({
        method: "post",
        url: "https://api.petfinder.com/v2/oauth2/token",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data"},
      })
        .then(function (response) {
          //handle success
          console.log(response)
          return response.data.access_token;
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
}

export async function getAnimalsByType(type: string) {

    const accessToken = await login();

    const response = await axios
    .get("https://api.petfinder.com/v2/animals", {
    params: {
        type: type
    },
    headers: {
        "Authorization" : `Bearer ${accessToken}`,
       
    }
    })
    console.log(response.data)
    return response.data

}

// const credentials = {
//     client: {
//       id: process.env.REACT_APP_PETFINDER_API_KEY!,
//       secret: process.env.REACT_APP_PETFINDER_SECRET_KEY!
//     },
//     auth: {
//       tokenHost: 'https://api.petfinder.com/v2/oauth2/token'
//     }
// }

// let refreshToken = require('oauth2-token-refresh')('postgres://somedbserver/somedb', credentials, 'initial refresh token');

// let token = "";

// refreshToken.refresh(); //returns a promise
// refreshToken.getAccessToken().then(function(result: string) {
//     token = result
//   console.log(result);
// });

// export function PetfinderApi(){
//         console.log("hi")
//         return axios
//         .get<any>(`https://api.petfinder.com/v2/animals?type=dog`, {
//         headers: { "Authorization" : `Bearer {${token}}` }
//     }).then(response => response.data)
    
// }