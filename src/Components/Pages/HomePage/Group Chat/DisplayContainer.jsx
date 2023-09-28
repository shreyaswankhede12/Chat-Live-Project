import React, { useState, useEffect } from "react";
import { db } from "../../../../firebase"; // Import your Firebase configuration
// ...

function My_Container() {
  const [displayNames, setDisplayNames] = useState([]);
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  useEffect(() => {
    const fetchUserDisplayNames = async () => {
      try {
        const userCollectionRef = db.collection("users");
        const usersSnapshot = await userCollectionRef.get();
        
        const displayNamesArray = [];
        usersSnapshot.forEach((doc) => {
          const user = doc.data();
          displayNamesArray.push(user.displayName);
        });
        console.log(displayNamesArray)

        setDisplayNames(displayNamesArray);
      } catch (error) {
        console.error("Error fetching user display names:", error);
      }
    };

    if (isContainerVisible) {
      fetchUserDisplayNames();
    }
  }, [isContainerVisible]);

  const handleClick = () => {
    setIsContainerVisible(!isContainerVisible);
    
  };

  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: isContainerVisible ? "flex" : "none",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  };

  return (
    <div>
      <button onClick={handleClick}>Create Group</button>
      <div style={containerStyle}>
        {isContainerVisible && (
          <div className="container">
            <h2>Display Names</h2>
            <ul>
              {displayNames.map((displayName, index) => (
                <li key={index}>{displayName}</li>
              ))}
            </ul>
            <button onClick={handleClick} style={closeButtonStyle}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default My_Container;
