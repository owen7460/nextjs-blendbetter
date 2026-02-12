import { createOpenAI } from "@ai-sdk/openai";
import { NextRequest } from "next/server";
import { streamText, convertToModelMessages } from "ai";

const openai = createOpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY,
});

export async function POST(request: NextRequest) {
  const { messages } = await request.json();
  const result = streamText({
    model: "gpt-4o-mini",
    prompt: "Hello, how are you?",
  });

  console.log("API Key:", process.env.OPENAI_API_KEY);
  return result.toTextStreamResponse();
}

// import { NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   // 打印环境变量到终端
//   console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);

//   return new Response(JSON.stringify({ status: "ok" }), {
//     status: 200,
//     headers: { "Content-Type": "application/json" },
//   });
// }
