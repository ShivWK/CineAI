import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { setToast } from "../features/loginSlice";

async function signInHandler({ email, password, dispatch, setAuthLoading }) {
    try {
        let userCredentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);
        setAuthLoading(false)
    } catch (err) {
        dispatch(setToast({
            show: true,
            error: true,
            message: "Invalid credentials. Try again or sign up."
        }))

        setAuthLoading(false)
    }
}

export default signInHandler;

// {
//     "user": {
//         "uid": "sMT2wZFNf9fP0JoqKe8w76uMZk73",
//         "email": "shivendrawk@gmail.com",
//         "emailVerified": false,
//         "isAnonymous": false,
//         "providerData": [
//             {
//                 "providerId": "password",
//                 "uid": "shivendrawk@gmail.com",
//                 "displayName": null,
//                 "email": "shivendrawk@gmail.com",
//                 "phoneNumber": null,
//                 "photoURL": null
//             }
//         ],
//         "stsTokenManager": {
//             "refreshToken": "AMf-vByQXg9T_WWMo1Q3LpCzwfvf-6bffvnENgBJHfft35iBNnggOoaSzAvxbrQjApA4Wjui09ZVgF3ZJfkx_c9dv4Qn8cztgyz2JVRQHbxm6n1niXMNUBhzjcFLTN0mIqNUC4nvdd3w5oGX8lmRtLc4RNkHEkb8axd8Qfep9bniefzKkOUHQDupTHIS5z4nmNlp1j6Zc0-FLBvGfOAvu5RwvjLsD8Efxw",
//             "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU4MWYwNTJhZWYwNDBhOTdjMzlkMjY1MzgxZGU2Y2I0MzRiYzM1ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2luZWFpLTYzOTUyIiwiYXVkIjoiY2luZWFpLTYzOTUyIiwiYXV0aF90aW1lIjoxNzU5NjYzNzQ2LCJ1c2VyX2lkIjoic01UMndaRk5mOWZQMEpvcUtlOHc3NnVNWms3MyIsInN1YiI6InNNVDJ3WkZOZjlmUDBKb3FLZTh3NzZ1TVprNzMiLCJpYXQiOjE3NTk2NjM3NDYsImV4cCI6MTc1OTY2NzM0NiwiZW1haWwiOiJzaGl2ZW5kcmF3a0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2hpdmVuZHJhd2tAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.mvsh1EW_lIi7nNn9ak_SOkLjiFhPthL4qxpDGPNc8D4UuQGWWiJ3jY71h8TzOUkz2keyIHnHINFh3UDQtukaqCYPSGOIjU3_t6HYEgAc5DU7awCCx3qAO9lxVir8rfxJ3dSie1FquoB4vLq3UkL1ZPiKnm1sgwSSHGewNIRsqFzzvwg69Nn-mbs_ThQsS9V_lcuGcXjIV47hTpOLZ_1viqkkHFCjb3WoVpyfS43ZTXK31WTv8sKvI7Z796Wm7vm3iI30F3wE8pFNIJDneykSiHSObniwQtNrEdwzg39tiAqUBxtqXlV3_yqhc6v0UjZ7QlX_RLXVj3THhByJcKRUSg",
//             "expirationTime": 1759667607084
//         },
//         "createdAt": "1759492809996",
//         "lastLoginAt": "1759663746796",
//         "apiKey": "AIzaSyA74mw-lJiHtPICPIz8A-N_RzbJyzDX2eI",
//         "appName": "[DEFAULT]"
//     },
//     "providerId": null,
//     "_tokenResponse": {
//         "kind": "identitytoolkit#VerifyPasswordResponse",
//         "localId": "sMT2wZFNf9fP0JoqKe8w76uMZk73",
//         "email": "shivendrawk@gmail.com",
//         "displayName": "",
//         "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU4MWYwNTJhZWYwNDBhOTdjMzlkMjY1MzgxZGU2Y2I0MzRiYzM1ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2luZWFpLTYzOTUyIiwiYXVkIjoiY2luZWFpLTYzOTUyIiwiYXV0aF90aW1lIjoxNzU5NjYzNzQ2LCJ1c2VyX2lkIjoic01UMndaRk5mOWZQMEpvcUtlOHc3NnVNWms3MyIsInN1YiI6InNNVDJ3WkZOZjlmUDBKb3FLZTh3NzZ1TVprNzMiLCJpYXQiOjE3NTk2NjM3NDYsImV4cCI6MTc1OTY2NzM0NiwiZW1haWwiOiJzaGl2ZW5kcmF3a0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2hpdmVuZHJhd2tAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.mvsh1EW_lIi7nNn9ak_SOkLjiFhPthL4qxpDGPNc8D4UuQGWWiJ3jY71h8TzOUkz2keyIHnHINFh3UDQtukaqCYPSGOIjU3_t6HYEgAc5DU7awCCx3qAO9lxVir8rfxJ3dSie1FquoB4vLq3UkL1ZPiKnm1sgwSSHGewNIRsqFzzvwg69Nn-mbs_ThQsS9V_lcuGcXjIV47hTpOLZ_1viqkkHFCjb3WoVpyfS43ZTXK31WTv8sKvI7Z796Wm7vm3iI30F3wE8pFNIJDneykSiHSObniwQtNrEdwzg39tiAqUBxtqXlV3_yqhc6v0UjZ7QlX_RLXVj3THhByJcKRUSg",
//         "registered": true,
//         "refreshToken": "AMf-vByQXg9T_WWMo1Q3LpCzwfvf-6bffvnENgBJHfft35iBNnggOoaSzAvxbrQjApA4Wjui09ZVgF3ZJfkx_c9dv4Qn8cztgyz2JVRQHbxm6n1niXMNUBhzjcFLTN0mIqNUC4nvdd3w5oGX8lmRtLc4RNkHEkb8axd8Qfep9bniefzKkOUHQDupTHIS5z4nmNlp1j6Zc0-FLBvGfOAvu5RwvjLsD8Efxw",
//         "expiresIn": "3600"
//     },
//     "operationType": "signIn"
//}