import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../../firebase.js";
import { AuthContext } from "../../../../Context/authcontext.js";


const GroupContainer = ({ onClose }) => {
  const [groupName, setGroupName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // List of users to search from

  const handleSearch = () => {
    // Implement user search logic here and update searchResults
  };

  const handleUserSelection = (userId) => {
    // Toggle user selection
    if (selectedUsers.includes(userId)) {
      setSelectedUsers((prevSelected) =>
        prevSelected.filter((user) => user !== userId)
      );
    } else {
      setSelectedUsers((prevSelected) => [...prevSelected, userId]);
    }
  };

  const handleCreateGroup = async () => {
    try {
      // Generate a unique group ID (you can use a UUID library)
      const groupId = generateUniqueId(); // Implement this function

      // Create a new group in Firestore
      const groupRef = doc(db, "groups", groupId);
      const groupData = {
        name: groupName,
        participants: [...selectedUsers],
        // Additional group metadata can be added here
      };

      await setDoc(groupRef, groupData);

      // Update user chats for selected users
      selectedUsers.forEach(async (participant) => {
        await setDoc(doc(db, "userChats", participant), {
          [groupId]: {
            lastMessage: null, // Initialize with no last message
            date: null, // Initialize with no date
          },
        });
      });

      // Reset the form and selected users
      setGroupName("");
      setSelectedUsers([]);

      // Close the group container
      onClose();
    } catch (error) {
      console.error("Error creating group:", error);
    }
  };

  return (
    <div className="group-container">
      <input
        type="text"
        placeholder="Search for users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {/* Render users here with checkboxes */}
        {searchResults.map((user) => (
          <li key={user.id}>
            <input
              type="checkbox"
              value={user.id}
              checked={selectedUsers.includes(user.id)}
              onChange={() => handleUserSelection(user.id)}
            />
            {user.name}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Group Name (Optional)"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <button onClick={handleCreateGroup}>Create Group</button>
    </div>
  );
};

export default GroupContainer;
