import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen width-full height-full relative bg-transparent bg-[url('/images/blendbetterBG.png')] bg-cover bg-left">
        <p className="text-gray-800 text-sm absolute z-100 bottom-0 left-0 translate-x-1/2 -translate-y-1/2">
          Version 1.0.2
        </p>
        <p className=" text-zinc-500 text-sm max-w-2xl text-center absolute z-100 top-7 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Do you know each year, Canadians waste over 500,000 tonnes of fruit,
          which is equivalent to more than 4,000 Olympic-sized swimming pools
        </p>
        <div className="absolute z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-8">
          <h1 className="textFirst text-gray-800 text-9xl font-bold antialiased tracking-tight">
            BlendBetter
          </h1>
          <p className="textSecond text-zinc-600 text-3xl max-w-4xl text-center">
            Build your perfect drinks — smoothies, bubble teas, cocktails — and
            see them come to life instantly.
          </p>
          <p className="textThird text-zinc-600 text-base max-w-2xl text-center">
            This app is an AI-powered tool that helps you turn the fruits you
            have at home into delicious smoothies, bubble teas, beverages, or
            cocktails. Even those fruit taste sour, but let's save them together
            and stop wasting fruit!
          </p>
          <div className="flex items-center justify-center gap-8">
            <Dialog>
              <DialogTrigger asChild>
                <span className="buttonFirst text-zinc-600 bg-transparent border border-gray-800 px-6 py-2 rounded-full text-lg font-bold">
                  About us
                </span>
              </DialogTrigger>
              <DialogContent className="absolute z-110">
                <DialogHeader>
                  <DialogTitle>The Story Behind BlendBetter</DialogTitle>
                </DialogHeader>
                <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 space-y-6">
                  <p>
                    A while ago, my girlfriend and I bought some strawberries at
                    Safeway. They looked great, but the moment we tried them,
                    they were unbelievably sour. After the first bite, I swore I
                    would never eat them again.
                  </p>
                  <p>
                    Later, she found some drink recipes online that used
                    strawberries. Out of curiosity, we tried them—and they
                    turned out to be surprisingly amazing.
                  </p>
                  <p>
                    That’s when it hit me: in an AI-powered world, why not build
                    something that can instantly turn simple ingredients into
                    great ideas and recipes? That was the beginning of
                    BlendBetter.
                  </p>
                </div>
                <DialogDescription>
                  With thanks to Frank (technical inspiration), Maggie (story
                  inspiration), and Steven (visual support).
                </DialogDescription>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Link
              href="/dashboard"
              className="buttonSecond text-white px-6 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-lg font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
