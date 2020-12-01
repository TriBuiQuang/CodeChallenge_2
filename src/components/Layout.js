import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { USER_CONNECTED, LOGOUT } from "../Events";
import LoginForm from "./LoginForm";
import ChatContainer from "./chats/ChatContainer";

const socketUrl = "http://localhost:3231";
function Layout(props) {
   const [socket, setSocket] = useState(null);
   const [user, setUser] = useState(null);

   useEffect(() => {
      initSocket();
   }, []);

   /*
    *	Connect to and initializes the socket.
    */
   const initSocket = () => {
      const socket = io(socketUrl);

      socket.on("connect", () => {
         console.log("Connected");
      });

      setSocket(socket);
   };

   /*
    * 	Sets the user property in state
    *	@param user {id:number, name:string}
    */
   const SetUser = (user) => {
      socket.emit(USER_CONNECTED, user);
      setUser(user);
   };

   /*
    *	Sets the user property in state to null.
    */
   const logout = () => {
      socket.emit(LOGOUT);
      setUser(null);
   };

   return (
      <div className="container">
         {!user ? <LoginForm socket={socket} SetUser={SetUser} /> : <ChatContainer socket={socket} user={user} logout={logout} />}
      </div>
   );
}
export default Layout;
