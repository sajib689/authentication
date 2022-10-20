/*
--------------------------------
Basic API setup
--------------------------------
1.Contexts API: Share auth state with other components (Across the application)
2. Create an userContext.
3. Contexts Provider with passed children.
4.set the context in the index.js file.
5.Now to consume the context: export the AuthContext from the userContext.
6.Now at Header  or anywhere else, export the AuthContext from the userContext.

Auth Integration:

1. use getAuth by passing  the app from firebaseConfig configuration.
2.crate a function named createUser to return the createUserWithEmailAndPassword.
3.

*/