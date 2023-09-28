import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase.js"; // Import your Firebase configuration

// Function to store user data in Firestore
export async function storeUserInFirestore(user) {
  try {
    // Reference to the Firestore document for the user
    const userDocRef = doc(db, "users", user.uid);
    
    // Define the data you want to store for the user
    const userData = {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
      photoURL: user.photoURL
      // Add other user data as needed
    };
    
    // Set the user data in the Firestore document
    await setDoc(userDocRef, userData);
    console.log("User data successfully stored in Firestore!");
  } catch (error) {
    console.error("Error storing user data: ", error);
  }
}