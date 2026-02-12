import { createDeepSeek } from "@ai-sdk/deepseek";
import { NextRequest } from "next/server";
import { streamText, convertToModelMessages } from "ai";
const deepseek = createDeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY,
});

export async function POST(request: NextRequest) {
  const { messages } = await request.json();
  const result = streamText({
    model: deepseek("deepseek-chat"),
    messages: await convertToModelMessages(messages),
    system:
      "You are a helpful assistant that can answer questions and help with tasks.",
  });
  return result.toUIMessageStreamResponse();
}
