import React from "react";

export default function ({ name, numberOfUsers, user, logout }) {
   return (
      <div className="chat-header">
         <div className="user-info">
            <div className="user-name">{name}</div>
            <div className="status">
               <div className="indicator"></div>
               <span>{numberOfUsers ? numberOfUsers : null}</span>
            </div>
         </div>
         <div className="options">
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>
               {" "}
               <i className="far fa-user-circle" />
               &nbsp; {user.name}
            </div>
            <div className="dropdown" style={{ float: "right" }}>
               <div className="dropbtn">
                  {" "}
                  <i className="fas fa-ellipsis-v" />
               </div>
               <div className="dropdown-content">
                  <div
                     onClick={() => {
                        logout();
                     }}
                     title="Logout"
                     className="logout"
                  >
                     Logout &nbsp;
                     <i className="fas fa-sign-out-alt" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
