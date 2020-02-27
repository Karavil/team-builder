import React, { useState } from "react";

const NewMemberForm = props => {
   const [member, setMember] = useState({
      name: "",
      email: "",
      role: ""
   });

   const addTeamMember = props.addTeamMember;

   const handleSubmit = formEvent => {
      formEvent.preventDefault();
      addTeamMember(member.name, member.email, member.role);
   };

   const handleChange = formEvent => {
      setMember({
         ...member,
         [formEvent.target.name]: formEvent.target.value
      });
   };

   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="name">Name: </label>
         <input type="text" name="name" onChange={handleChange} />

         <label htmlFor="role">Role: </label>
         <input type="text" name="role" onChange={handleChange} />

         <label htmlFor="email">Email:</label>
         <input type="email" name="email" onChange={handleChange} />

         <button type="submit">Submit</button>
      </form>
   );
};

export default NewMemberForm;
