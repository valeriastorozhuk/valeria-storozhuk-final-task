import { useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client"
import Chat from "../Components/Chat";
import "../Components/chat.css"

const socket = io.connect("http://localhost:3001")


function ChatPage() {
    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")
    const [showChat, setShowChat] = useState(false)

    const joinRoom = () => {
       if (username !== "" && room !== "") {
          socket.emit("join_room", room) 
          setShowChat(true)
       }
    }

    return (
        <div>
                <h6 className="mb-4 breadcrumb"><Link style={{ textDecoration: 'none'}} to="/"><span className="text-muted">Home &#187; </span></Link>Chat with me</h6>
            <div className="chatpage">
                {!showChat ? (
                <div className="joinChatContainer">
                <h3 className="header-menu">Join a chat</h3>
                <input 
                    type="text" 
                    placeholder="Enter your name..." 
                    onChange={(event) => {
                        setUsername(event.target.value);
                        }}
                />
                <input 
                    type="text" 
                    placeholder="Room ID..."
                    onChange={(event) => {
                        setRoom(event.target.value);
                        }}
                />
                <button onClick={joinRoom}>Join a room</button>
            </div>
                )
            : (
            <Chat socket={socket} username={username} room={room}/>
            )}
        </div>
        </div>
    )
}

export default ChatPage