"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";

const fruits = [
  {
    id: 1,
    name: "Apple",
    image: "/images/apple.jpg",
  },
  {
    id: 2,
    name: "Banana",
    image: "/images/banana.jpg",
  },
  {
    id: 3,
    name: "Orange",
    image: "/images/orange.jpg",
  },
  {
    id: 4,
    name: "Pineapple",
    image: "/images/pineapple.jpg",
  },
  {
    id: 5,
    name: "Strawberry",
    image: "/images/strawberry.jpg",
  },
  {
    id: 6,
    name: "Watermelon",
    image: "/images/watermelon.jpg",
  },
  {
    id: 7,
    name: "Kiwi",
    image: "/images/kiwi.jpg",
  },
  {
    id: 8,
    name: "Mango",
    image: "/images/mango.jpg",
  },
  {
    id: 9,
    name: "Peach",
    image: "/images/peach.jpg",
  },
  {
    id: 10,
    name: "Pear",
    image: "/images/pear.jpg",
  },
];

export default function Dashboard() {
  const { messages, sendMessage } = useChat();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatContainerRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const handleFruitClick = (fruitName: string) => {
    if (selectedFruits.includes(fruitName)) {
      setSelectedFruits(selectedFruits.filter((fruit) => fruit !== fruitName));
    } else {
      setSelectedFruits([...selectedFruits, fruitName]);
    }
  };
  const handleSendMessage = async () => {
    if (selectedFruits.length === 0) {
      return;
    }

    sendMessage({
      text: `Please generate a smoothie recipe for ${selectedFruits.join(", ")}`,
    });
  };

  return (
    <>
      <div className="grid grid-cols-5 justify-center gap-8 mb-12">
        {fruits.map((fruit) => (
          <div
            key={fruit.id}
            className={`relative w-40 h-40 cursor-pointer rounded-3xl
    ${selectedFruits.includes(fruit.name) ? "fruit-selected" : ""}
  `}
          >
            <Image
              loading="eager"
              src={fruit.image}
              alt={fruit.name}
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-4xl"
              onClick={() => handleFruitClick(fruit.name)}
            />
          </div>
        ))}
      </div>
      <h2 className="mt-10 text-center font-semibold">
        Let's choose your fruit.
      </h2>
      <p>
        Please choose 1-3 kinds of fruits, you can check what you have in your
        fridge
      </p>
      <Button className="mt-4" onClick={() => handleSendMessage()}>
        Generate
      </Button>

      <div className="flex items-center justify-center gap-4 mt-10">
        <p>
          You have selected:{" "}
          {selectedFruits.map((fruit) => (
            <span key={fruit}>
              {" "}
              &nbsp;
              {fruit}
            </span>
          ))}
        </p>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="w-200">
          {messages.map((message) => (
            <div key={message.id}>
              {message.parts.map((part, index) => (
                <div key={message.id + index}>
                  {part.type === "text" ? part.text : ""}
                </div>
              ))}
            </div>
          ))}
          <div ref={chatContainerRef}></div>
        </div>
      </div>
    </>
  );
}
