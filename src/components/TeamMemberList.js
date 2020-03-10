import React from "react";
import MemberCard from './Member';

const TeamMemberList = props => {
   const memberList = props.teamMembers.map(member => {
      return (
         <MemberCard key={member.creationDate} name={member.name} email={member.email} role={member.role} />
      );
   });
   return <div className="team-members">{memberList}</div>;
};

export default TeamMemberList;
