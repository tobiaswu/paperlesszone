import { DiscoverCard } from '@/components/DiscoverCard';
import { LottieAnimation } from '@/components/LottieAnimation';
import Image from 'next/image';
import {
  PiChecksLight,
  PiFactoryLight,
  PiFilesLight,
  PiPiggyBankLight,
  PiRobotLight,
  PiRocketLaunchLight,
  PiSmileyLight,
} from 'react-icons/pi';

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen relative">
        <div className="hero-content text-center flex flex-col">
          <div className="max-w-6xl">
            <h1 className="text-4xl sm:text-6xl font-bold leading-relaxed">
              Scale and Digitalize your Business with Intelligent Automations
            </h1>
          </div>

          <h2 className="text-2xl sm:text-4xl font-semibold mt-16 mb-8">
            Discover how you can
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <DiscoverCard icon={<PiFactoryLight />} title="Build systems" />
            <DiscoverCard icon={<PiRobotLight />} title="Automate processes" />
            <DiscoverCard
              icon={<PiFilesLight />}
              title="Eliminate pen & paper"
            />
            <DiscoverCard icon={<PiPiggyBankLight />} title="Reduce costs" />
            <DiscoverCard
              icon={<PiRocketLaunchLight />}
              title="Increase efficiency"
            />
            <DiscoverCard
              icon={<PiSmileyLight />}
              title="Boost employee happiness"
            />
          </div>
        </div>
        <div className="-z-10 w-full opacity-30 absolute">
          <LottieAnimation src="/animations/matrix.lottie" />
        </div>
      </div>

      <section className="grid gap-4 items-center grid-cols-2 bg-base-100 px-4">
        <div className="order-2 md:order-1 col-span-2 md:col-span-1 flex flex-col items-center">
          <p className="text-xl mb-16 md:mt-16 xl:mt-0">
            We are proud to partner with
          </p>
          <div className="grid order-2 grid-cols-2 gap-4">
            <div className="bg-neutral p-4 rounded-lg h-40 w-40 flex items-center justify-center">
              <Image
                className="grayscale w-auto"
                src="/images/CF_logo.webp"
                alt="Chris Feith Logo"
                width={80}
                height={80}
              />
            </div>
            <div className="bg-neutral p-4 rounded-lg h-40 w-40 flex items-center justify-center">
              <Image
                className="grayscale w-auto"
                src="/images/IMS_logo.webp"
                alt="Immoselfmade Logo"
                width={80}
                height={80}
              />
            </div>
            <div className="bg-neutral p-4 rounded-lg h-40 w-40 flex items-center justify-center">
              <Image
                className="grayscale w-auto"
                src="/images/ADP_logo.webp"
                alt="Aldeas de Paz Logo"
                width={80}
                height={80}
              />
            </div>
            <div className="bg-neutral p-4 rounded-lg h-40 w-40 flex items-center justify-center">
              <Image
                className="grayscale w-auto"
                src="/images/WV_logo.webp"
                alt="Wupperfeld Ventures Logo"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-2 md:col-span-1">
          <LottieAnimation src="/animations/automation.lottie" />
        </div>
      </section>

      <section className="pt-32 p-4 bg-base-100">
        <h2 className="text-3xl sm:text-5xl leading-relaxed font-semibold text-center mb-12">
          Have you ever wondered how you can benefit from the wave of new
          technology like artificial intelligence?
        </h2>
        <div className="grid grid-cols-3 gap-12">
          <div
            className="tooltip tooltip-neutral col-span-3 lg:col-span-1 place-self-center"
            data-tip="Prompt: Imagine a mystical figure, with a striking resemblance to Dumbledore, wearing sunglasses, illuminated by a sea of neon green lights as he casts a spell with his wand, creating a stunning visual display."
          >
            <Image
              style={{ height: 'auto' }}
              className="rounded-lg border-4 border-transparent hover:border-primary"
              src="/images/ai-magician.webp"
              alt="Ai generated image of a magician"
              width={400}
              height={600}
            />
          </div>
          <div className="flex flex-col col-span-3 lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl leading-relaxed font-semibold mb-4">
              And how you can implement it in your business to make your life
              dramatically easier?
            </h3>
            <p className="mb-4">
              Today&apos;s software landscape enables you to do much more than
              just chatbots but it can be overwhelming and how do you know what
              works best for your business?
            </p>
            <p className="mb-8">
              This is why we build this portal. To bundle our continuous
              research and reveal real world use cases
            </p>
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-neutral rounded-lg w-14 h-14 flex items-center justify-center">
                <PiChecksLight className="text-3xl text-primary" />
              </div>
              <p className="w-fit">
                stay up-to-date with the latest trends and tools
              </p>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-neutral rounded-lg w-14 h-14 flex items-center justify-center">
                <PiChecksLight className="text-3xl text-primary" />
              </div>
              <p className="w-fit">identify use cases for your business</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-neutral rounded-lg w-14 h-14 flex items-center justify-center">
                <PiChecksLight className="text-3xl text-primary" />
              </div>
              <p className="w-fit">stay up to date with trends and tools</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
