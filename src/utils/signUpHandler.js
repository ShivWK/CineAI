import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

async function signUpHandler({ email, password }) {
    console.log("from util", auth, email, password)

    try {
        let userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials.user);
    } catch (err) {
        console.log("Failed", err)
    }
}

export default signUpHandler;