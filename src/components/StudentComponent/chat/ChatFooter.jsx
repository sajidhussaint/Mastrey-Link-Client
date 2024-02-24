import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

const ChatFooter = ({ socket, user }) => {
  const inputRef = useRef(null);
  const selectedCourse = useSelector((state) => state.selectedCourse);
  const [message, setMessage] = useState("");
  const handleSendMessage = (e) => {
    console.log(selectedCourse, "kkkk");
    e.preventDefault();
    if (message.trim() && user?.firstname) {
      const courseId ='657835bea15a220603e8f8ee'
       //TODO: // typeof selectedCourse === "string"
        //   ? selectedCourse
        //   : selectedCourse?.id;
      socket.emit("message", {
        courseId: courseId,
        message: {
          firstname: user.firstname,
          lastname: user.lastname,
          message: message,
          sender: user._id,
        },
      });
    }
    setMessage("");
  };
  return (
    <div className="bg-gray-300 p-4 flex justify-between items-center">
      <input
        className="flex items-center h-10 rounded px-3 text-sm w-full "
        type="text"
        value={message}
        placeholder="Type your message…"
        ref={inputRef}
        onChange={(e) => setMessage(e.target.value)}
      />
      <i
        className="fa-solid fa-paper-plane text-2xl mx-4 cursor-pointer"
        onClick={handleSendMessage}
      ></i>
    </div>
  );
};

export default ChatFooter;
