// script.js

// Chatbot data
const chatbotData = [
    {
      instruction: "What is the best beach to visit in Lagos?",
      context: "Lagos is known for its beautiful beaches that attract locals and tourists alike. Some popular beaches include Tarkwa Bay, Elegushi Beach, and Landmark Beach.",
      response: "Tarkwa Bay Beach is a popular choice for visitors due to its calm waves, family-friendly atmosphere, and scenic views.",
      category: "closed_qa"
    },
    {
      instruction: "What activities are available at Lekki Conservation Centre?",
      context: "Lekki Conservation Centre is a nature reserve in Lagos known for its canopy walk, wildlife, and serene environment.",
      response: "At Lekki Conservation Centre, visitors can experience the canopy walkway, which is the longest in Africa, walk through nature trails, and see wildlife like monkeys and birds in their natural habitat.",
      category: "open_qa"
    },
    {
      instruction: "Where can I experience Lagos nightlife?",
      context: "Lagos offers a vibrant nightlife with many clubs, lounges, and bars concentrated in areas like Victoria Island and Ikeja.",
      response: "For a lively nightlife experience, visit Victoria Island or Ikeja, where you'll find popular spots like Quilox, Cubana, and Bayrock Lounge.",
      category: "open_qa"
    },
    {
      instruction: "What are some famous foods to try in Lagos?",
      context: "Lagos is known for its rich variety of traditional foods, including jollof rice, suya, and efo riro.",
      response: "When in Lagos, be sure to try jollof rice, a spicy tomato-based rice dish; suya, spicy grilled meat skewers; and efo riro, a flavorful spinach stew.",
      category: "open_qa"
    },
    {
      instruction: "Are there any cultural landmarks to visit in Lagos?",
      context: "Lagos has several cultural landmarks that reflect Nigeria's heritage and history, including the National Museum and Freedom Park.",
      response: "The National Museum Lagos is a must-visit for cultural enthusiasts, offering exhibits on Nigerian art and history. Freedom Park is another landmark with historical significance, offering insight into Nigeria's colonial past.",
      category: "closed_qa"
    }
  ];
  
  // Chatbot logic
  const chatMessages = document.getElementById("chat-messages");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");
  
  // Add message to chat
  function addMessage(text, isUser = false) {
    const message = document.createElement("div");
    message.classList.add("message", isUser ? "user-message" : "bot-message");
    message.textContent = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // Handle user input
  function handleUserInput() {
    const query = userInput.value.trim();
    if (!query) return;
  
    // Add user's message
    addMessage(query, true);
  
    // Find chatbot response
    const response = getChatbotResponse(query);
    addMessage(response);
  
    userInput.value = ""; // Clear input
  }
  
  // Find the best response
  function getChatbotResponse(query) {
    const lowerQuery = query.toLowerCase();
    for (let entry of chatbotData) {
      if (lowerQuery.includes(entry.instruction.toLowerCase())) {
        return entry.response;
      }
    }
    return "I'm sorry, I couldn't understand your question. Can you rephrase it?";
  }
  
  // Event listener
  sendBtn.addEventListener("click", handleUserInput);
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleUserInput();
  });
  