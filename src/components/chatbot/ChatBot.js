import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant." },
  ]);
  const [inputValue, setInputValue] = useState("");
  const apiKey = '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'; // Hardcode your API key here

  const handleSendMessage = async (event) => {
    event.preventDefault();
    const newMessage = { role: "user", content: inputValue };

    /* eslint-disable no-unused-vars */
    setMessages((prevMessages) => [...prevMessages, newMessage]); // Update messages with the new message
    /* eslint-enable no-unused-vars */

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-002",
          messages: [...messages, newMessage], // Use updated messages state
          temperature: 0.5,
          max_tokens: 150,
          stop: ["\n", " User:", " Assistant:"],
        },
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`, // Make sure apiKey contains the correct API key
              },
              
        }
      );

      const assistantMessage = response.data.choices[0].message.content;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: assistantMessage },
      ]); // Update messages with assistant's response
      setInputValue("");
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-sm text-gray-500">{message.role}</h3>
            <p className="text-lg text-gray-900">{message.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
