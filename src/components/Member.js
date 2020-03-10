import React from 'react';

const MemberCard = (props) => {
   return (
      <div className="member-card">
         <h2>{props.name}</h2>
         <h3>{props.email}</h3>
         <h3>{props.role}</h3>
      </div>
   );
}

export default MemberCard;