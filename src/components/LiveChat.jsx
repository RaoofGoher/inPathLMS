import React, { useState } from 'react';

const LiveChat = () => {
  // State for holding messages and chat visibility
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(true); // Track whether the chat is open or not

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
    }
  };

  // Toggle chat visibility
  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen); // Toggle the state
  };

  return (
    <>
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 max-w-sm w-full bg-gradient-to-r from-[#4A90E2] via-[#50E3C2] to-[#F5A623] shadow-lg rounded-2xl border p-4 transform transition-all duration-300 ease-in-out">
          <div className="flex flex-col h-full">
            {/* Chat Header with Close Button */}
            <div className="flex justify-between items-center bg-[#4A90E2] text-white p-4 rounded-lg shadow-md mb-2">
              <span className="text-xl font-semibold">Live Chat</span>
              <button
                onClick={handleToggleChat}
                className="text-white text-2xl hover:bg-[#333333] p-2 rounded-full"
                aria-label="Close Chat"
              >
                &times;
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto bg-[#F7F9FC] rounded-lg shadow-inner">
              <div className="space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`px-4 py-2 rounded-xl max-w-xs ${
                        msg.sender === 'user' ? 'bg-[#4A90E2] text-white' : 'bg-[#7F8C8D] text-[#333333]'
                      } shadow-lg`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="flex p-2 mt-4 bg-[#F7F9FC] border-t-2 border-[#7F8C8D] rounded-b-lg">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg border border-[#7F8C8D] focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all"
                placeholder="Type a message..."
              />
              <button
                type="submit"
                className="ml-2 p-3 bg-[#4A90E2] text-white rounded-full hover:bg-[#50E3C2] transition-all ease-in-out"
              >
                <span className="text-lg">&#10148;</span> {/* Arrow Icon */}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
