"use client";

import Image from "next/image";
import { useState } from "react";
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
];

export default function Dashboard() {
  const { messages, sendMessage } = useChat();
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const handleFruitClick = (fruitName: string) => {
    if (selectedFruits.includes(fruitName)) {
      setSelectedFruits(selectedFruits.filter((fruit) => fruit !== fruitName));
    } else {
      setSelectedFruits([...selectedFruits, fruitName]);
    }
  };
  const handleSendMessage = () => {
    if (selectedFruits.length === 0) {
      return;
    }

    sendMessage({
      text: `Please generate a smoothie recipe for ${selectedFruits.join(", ")}`,
    });
  };

  return (
    <>
      <div className="flex items-center justify-center gap-4 w-full">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="w-40 h-40 cursor-pointer">
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
      <div className="flex items-center justify-center gap-4 mt-10"></div>

      <div className="flex items-center justify-center gap-4 mt-4">
        <div>
          <div></div>
        </div>
        <div>
          <Button onClick={() => handleSendMessage()}>Generate</Button>
        </div>
      </div>
    </>
  );
}
