import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PLANS } from "../../constants/page";

export default function Home() {
  return (
    <main className="relative bg-gradient-to-b from-gray-950 via-slate-800 to-gray-900 text-white mx-auto flex flex-col ">
      {/* Hero Section */}
      <section className="flex flex-col ">
        <div className="" />
        <div className="relative">
          <div className=" px-4 py-12">
            <div className="flex items-center justify-between mx-5">
              <div className="flex items-center gap-2 ">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-white">
                  li
                </div>
                <span className="text-xl font-semibold">Slide</span>
              </div>
              <nav className="hidden space-x-6 text-lg text-cyan-300 md:block">
                <Link href="#features" className="hover:text-white">
                  Features
                </Link>
                <Link href="#pricing" className="hover:text-white">
                  Pricing
                </Link>
                <Link href="#about" className="hover:text-white">
                  About
                </Link>
              </nav>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600">
                <Link href="/dashboard">Login</Link>
              </Button>
            </div>

            <div className="mx-auto mt-16 max-w-3xl text-center">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl">
                Transform Your Instagram Engagement with Slide
              </h1>
              <p className="mt-6 text-lg text-cyan-300">
                Slide revolutionizes how you connect with your audience on
                Instagram. Automate responses and boost engagement effortlessly,
                turning interactions into valuable business opportunities.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400 bg-white text-cyan-300 hover:bg-cyan-300 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative w-full h-40 md:h-60 mt-28">
              <Image
                fill
                src="/Ig-creators.png"
                alt="Community member"
                className="object-cover rounded-xl "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container w-full py-12 md:py-24 lg:py-32 flex flex-col mx-auto text-white">
        <div className="container px-4 md:px-6 ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center ">
            <h2 className="text-3xl  font-bold tracking-tighter sm:text-5xl">
              Choose Your Plan
            </h2>
            <p className="max-w-[900px] text-lg text-cyan-300">
              Select the perfect plan to boost your Instagram engagement
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8">
            {PLANS.map((plan, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between bg-gradient-to-b from-gray-800 to-gray-900 text-white "
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-cyan-300">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal text-cyan-400">
                      /month
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-cyan-400" />
                        <span className="text-sm text-cyan-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
