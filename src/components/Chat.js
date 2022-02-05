import React from "react";
import { useParams } from "react-router-dom";
import useRoom from "../hooks/useRoom";
import "./Chat.css";

export default function Chat({ user, page }) {
  const { roomId } = useParams();
  const room = useRoom(roomId, user.uid);

  console.log({room});
  return <div className="chat">Chat</div>;
}
