import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

async function signInHandler({ email, password }) {
    try {
        let userCredentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredentials)
    } catch (err) {
        console.log(err);
    }
}

export default signInHandler;