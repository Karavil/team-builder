import React, { useState } from "react";
import NewMemberFrom from './components/NewMemberForm';
import TeamMemberList from "./components/TeamMemberList";
import "./App.css";

function App() {
   const [teamMembers, setTeamMembers] = useState([]);

   const addTeamMember = (name, email, role) => {
      const newMember = {
         name: name,
         email: email,
         role: role,
         creationDate: Date.now()
      }
      setTeamMembers(teamMembers => [...teamMembers, newMember]);
   }

   return (
      <div className="App">
         <NewMemberFrom addTeamMember={addTeamMember}/>
         <TeamMemberList teamMembers={teamMembers} />
      </div>
   );
}

export default App;
