import { redirect } from "react-router-dom";
import { auth } from "../../utils/firebaseConfig";

async function browseLoader() {
    await auth.authStateReady();
    const user = auth.currentUser;

    if (!user) {
        return redirect("/login")
    }
    
    return null
}

export default browseLoader;