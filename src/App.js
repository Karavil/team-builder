import React, { useState, useEffect } from "react";
import TeamMemberList from "./components/TeamMemberList";
import "./App.css";

function App() {
   const [teamMembers, setTeamMembers] = useState([]);

   const addTeamMember = (name, email, role) => {
      const newMember = {
         name: name,
         email: email,
         role: role
      }
      setTeamMembers(teamMembers => [...teamMembers, newMember]);
   }

   return (
      <div className="App">
         <TeamMemberList teamMembers={teamMembers} />
      </div>
   );
}

export default App;
