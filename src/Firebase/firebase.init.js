import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config"

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/*
steps for authentication
-----------------------------
Step-1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method
-------------------------------
Step-2: Setup component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

------------------------------------
Step 3: Set auth system
1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase
----------------------------------------
Step 4: create auth context hook (useAuth)
1. create a auth context
2. create context provider
3. set context provider context value
4. use Auth provider
5. create useAuth hook
-------------------------------------
Step 5: create private route
1. create private Route
2. set private route
--------------------------------
Step 6: Redirect after login
1. After login redirect user to their desired destination

*/