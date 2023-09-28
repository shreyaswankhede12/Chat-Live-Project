import { db } from "../../../../firebase";
import { getDocs, collection } from "firebase/firestore";

import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    // Create a reference to the "users" collection in Firestore
    const usersCollection = firebase.firestore().collection('users');

    // Fetch all documents from the "users" collection
    usersCollection.get().then((querySnapshot) => {
      const userArray = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.displayName) {
          userArray.push(userData.displayName);
        }
      });
      setUsers(userArray);
    });
  }, []);

  const toggleUsers = () => {
    setShowUsers(!showUsers);
  };

  return (
    <div>
      <h1>User List</h1>
      <button onClick={toggleUsers}>
        {showUsers ? 'Hide Users' : 'Show Users'}
      </button>
      {showUsers && (
        <div className="user-container">
          <ul>
            {users.map((displayName, index) => (
              <li key={index}>{displayName}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserList;

