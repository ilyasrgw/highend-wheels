"use client";
import { is } from "date-fns/locale";
import { useEffect, useRef, useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Thanks for your message!" },
      ]);
    }, 1000);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2 z-50  ">
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Chat
        </button>
      )}
      {/* Chat bot window */}
      {isOpen && (
        <div className="w-80 bg-white border border-gray-300 flex flex-col shadow-lg rounded-lg">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <span>Chat with us</span>{" "}
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-2xl"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="max-h-80  flex-1 overflow-y-auto  p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-blue-100 self-end text-right"
                    : "bg-gray-100 self-start text-left"
                }`}
              >
                {" "}
                {message.text}{" "}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="flex items-center border-t border-gray-300 p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 "
            />{" "}
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
