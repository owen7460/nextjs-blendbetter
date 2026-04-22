# BlendBetter

**BlendBetter** is a Next.js web app that turns the fruit you have into drink ideas. Pick fruits from a visual grid, choose a beverage style, and get AI-generated recipes streamed in the chat—smoothies, bubble tea, slushies, iced blended drinks, yogurt drinks, and cocktails.

The project is motivated by reducing food waste: imperfect or sour fruit can still shine in the right recipe.

## Links

[BlendBetter](https://blendbetterai.com)
![Homepage](/images/homepage.png)
![Dashboard](/images/dashboard.png)

## Coming Soon

An iOS version is planned to launch within the next few weeks. It uses on-device Vision models to instantly recognize fruit by scanning what you already have at home, creating a fast and intuitive recipe experience.

![iOS Version](/images/ios-version.png)

## Story behind BlendBetter

A while ago, my girlfriend and I bought some strawberries at Safeway. They looked great, but the moment we tried them, they were unbelievably sour. After the first bite, I swore I would never eat them again.

Later, she found some drink recipes online that used strawberries. Out of curiosity, we tried them—and they turned out to be surprisingly amazing.

I also realized this is something everyone experiences in daily life—buying ingredients that don’t turn out as expected, or not knowing how to make the most out of them. I started wondering: could we do something to reduce this kind of waste, and help people turn natural, healthy food into something even better?

That’s when it hit me: in an AI-powered world, why not build something that can instantly turn simple ingredients into great ideas and recipes?

With thanks to Frank (technical inspiration), Maggie (story inspiration), and Steven (visual support).

## Features

- **Landing page** with project context and a short “story behind BlendBetter” dialog.
- **Dashboard** with a sidebar to switch between drink modes.
- **Fruit picker** — tap 1–3 fruits, then **Generate** to request a recipe for the current beverage type.
- **Streaming AI responses** via the Vercel AI SDK, rendered as Markdown.
- **Intro animation** (Lottie) on first visit in a session.

## Product Scalability

The current fruit-to-drink concept is only one implementation.  
The same system can be repurposed into multiple recommendation products by changing assets, prompts, and categories.

## Extend the Idea

BlendBetter was designed with reusable components and configurable prompts.

With small changes to images, categories, and prompts, it can be adapted into other AI-powered consumer apps such as:

- Coffee recipe generator
- Meal planner
- Dessert creator
- Cocktail assistant

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Vercel AI SDK](https://sdk.vercel.ai/docs) (`ai`, `@ai-sdk/react`) with [DeepSeek](https://deepseek.com/) (`@ai-sdk/deepseek`)
- UI: [shadcn-style](https://ui.shadcn.com/) components, [Lucide](https://lucide.dev/) icons
- [lottie-react](https://www.npmjs.com/package/lottie-react) for motion and visuals

## Prerequisites

- **Node.js** — use a current LTS version compatible with Next.js 16.
- A **DeepSeek API key** for chat generation.

## Getting started

1. **Clone the repository** and install dependencies:

   ```bash
   npm install
   ```

2. **Environment variables** — create a `.env` file in the project root:

   ```bash
   DEEPSEEK_API_KEY=your_deepseek_api_key_here
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000). Use **Get Started** to open the dashboard.

## Scripts

| Command         | Description           |
| --------------- | --------------------- |
| `npm run dev`   | Start dev server      |
| `npm run build` | Production build      |
| `npm run start` | Run production server |
| `npm run lint`  | Run ESLint            |

## Project layout (high level)

- `app/page.tsx` — Home / hero.
- `app/dashboard/` — Dashboard routes; each subpage passes a `beverageName` into `Chat`.
- `app/api/chat/route.tsx` — `POST` handler that streams model output from DeepSeek.
- `components/Chat.tsx` — Fruit selection, `useChat`, and recipe display.
- `components/app-sidebar.tsx` — Navigation between drink types and Collections.
- `public/images/` — Fruit images, logos, and other static assets.
- `public/animations/` — Lottie JSON for the intro animation.

## API

Chat requests from the client go to the default AI SDK route **`/api/chat`** (see `components/Chat.tsx` and `app/api/chat/route.tsx`). Ensure `DEEPSEEK_API_KEY` is set before using **Generate**.

## License

Private project (`"private": true` in `package.json`). Adjust licensing if you publish the repo.
