
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase.js";

// Function to create a user document in Firestore
export async function createUserDocument(user) {
  try {
    const userRef = doc(db, "userChats", user.uid);
    // You can initialize the user document with default data if needed
    const userData = {
      // Add user data here
    };
    await setDoc(userRef, userData);
    console.log("User document successfully created in Firestore!");
  } catch (error) {
    console.error("Error creating user document:", error);
  }
}