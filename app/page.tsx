'use client';

import { BlogPreview } from '@/components/BlogPreview';
import { CheckedText } from '@/components/CheckedText';
import { DiscoverCard } from '@/components/DiscoverCard';
import { EmailSignup } from '@/components/EmailSignup';
import { LottieAnimation } from '@/components/LottieAnimation';
import { PartnerLogo } from '@/components/PartnerLogo';
import { ReviewCard } from '@/components/ReviewCard';
import { UseCaseCard } from '@/components/UseCaseCard';
import { RouteId } from '@/utils';
import { motion } from 'framer-motion';
import transitions from '@/public/transitions.json';
import Image from 'next/image';
import Link from 'next/link';
import {
  PiAlienLight,
  PiArrowBendDownRightLight,
  PiFactoryLight,
  PiFileCloudLight,
  PiFilesLight,
  PiFlowArrowLight,
  PiPiggyBankLight,
  PiPlusSquareFill,
  PiRepeatLight,
  PiRobotLight,
  PiRocketLaunchLight,
  PiSmileyLight,
  PiTriangleLight,
} from 'react-icons/pi';

export default function Home() {
  return (
    <>
      <div className="container mx-auto hero min-h-screen relative">
        <div className="hero-content text-center flex flex-col">
          <div className="max-w-6xl">
            <motion.h1
              variants={transitions.item}
              initial="hidden"
              whileInView="show"
              className="text-4xl sm:text-6xl font-bold sm:leading-relaxed bg-gradient-to-br from-slate-100 to-slate-300 text-transparent bg-clip-text"
            >
              Scale and Digitalize your Business with Intelligent Automations
            </motion.h1>
          </div>
          <motion.h2
            variants={transitions.item}
            initial="hidden"
            whileInView="show"
            className="text-2xl sm:text-4xl font-semibold sm:mt-16 my-8"
          >
            Discover how you can
          </motion.h2>
          <motion.div
            variants={transitions.container}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
          >
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
          </motion.div>
          <motion.div
            variants={transitions.fadeIn}
            initial="hidden"
            whileInView="show"
            className="flex flex-col sm:flex-row items-center justify-center pt-8"
          >
            <div className="flex flex-col">
              <p className="text-sm mr-16">We are proud to partner with</p>
              <PiArrowBendDownRightLight className="text-3xl" />
            </div>
            <div className="flex items-center gap-12">
              <PartnerLogo
                src="/images/IMS_logo.webp"
                alt="Immoselfmade Logo"
              />
              <PartnerLogo
                src="/images/WV_logo.webp"
                alt="Wupperfeld Ventures Logo"
              />
            </div>
          </motion.div>
        </div>
        <div className="-z-10 w-full opacity-30 absolute">
          <LottieAnimation src="/animations/matrix.lottie" />
        </div>
      </div>

      <section className="py-32 sm:pb-64 px-4 bg-base-100 bg-blob-md bg-cover bg-center">
        <div className="container mx-auto">
          <motion.h2
            variants={transitions.item}
            initial="hidden"
            whileInView="show"
            className="text-3xl sm:text-5xl font-semibold text-center mb-12 sm:leading-normal"
          >
            Learn based on our business use cases
          </motion.h2>
          <motion.p
            variants={transitions.item}
            initial="hidden"
            whileInView="show"
            className="mb-12 text-center max-w-xl mx-auto leading-relaxed"
          >
            We are a team of AI geeks, software engineers and entrepreneurs. We
            continuously browse the web and test the newest tools. We then
            combine this with our business mindset to create the solutions
            you&apos;ll find here.
          </motion.p>
          <motion.div
            variants={transitions.container}
            initial="hidden"
            whileInView="show"
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <UseCaseCard
              icon={<PiRepeatLight />}
              title="Automations"
              description="Connect various apps with each other via APIs and safe tons of time"
            />
            <UseCaseCard
              icon={<PiFlowArrowLight />}
              title="Workflows"
              description="Create systematic approaches to your daily tasks, easy to follow routines for your employees"
            />
            <UseCaseCard
              icon={<PiFileCloudLight />}
              title="Digitization"
              description="Get rid of pen and paper, make every information accessible to all your team"
            />
            <UseCaseCard
              icon={<PiAlienLight />}
              title="AI Generation"
              description="Build in chat bots generating the content you need, generate images and videos"
            />
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto pb-16 sm:pb-32 px-4 bg-base-100">
        <motion.h2
          variants={transitions.item}
          initial="hidden"
          whileInView="show"
          className="text-3xl sm:text-5xl font-semibold text-center mb-24 sm:leading-normal"
        >
          Explore our blog
        </motion.h2>
        <motion.div
          variants={transitions.fadeIn}
          initial="hidden"
          whileInView="show"
        >
          <BlogPreview />
        </motion.div>
        <Link href={RouteId.blog}>
          <button className="btn btn-primary mt-8">
            Learn more
            <PiTriangleLight className="rotate-90" />
          </button>
        </Link>
      </section>

      <section className="bg-neutral py-32">
        <motion.div
          variants={transitions.fadeIn}
          initial="hidden"
          whileInView="show"
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-2 gap-12">
            <div
              className="tooltip tooltip-neutral col-span-2 lg:col-span-1 w-fit"
              data-tip="Prompt: an astronaut floating in space with earth in the background, shrugging his arms, neon green lighting, cinematic."
            >
              <Image
                className="h-auto rounded-lg border-4 border-transparent hover:border-primary"
                src="/images/ai-astronaut-shrugging.webp"
                alt="Ai generated image of an astronaut shrugging his arms with earth in the background"
                width={512}
                height={512}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col col-span-2 lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:leading-normal">
                Benefit from the wave of new technology
              </h2>
              <h3 className="text-2xl mb-4 sm:leading-normal">
                Implement it in your business the right way
              </h3>
              <p className="mb-8">
                Today&apos;s software landscape enables you to do much more than
                just chatbots but it can be overwhelming and how do you know
                what works best for your business?
              </p>
              <div className="flex flex-col gap-4">
                <CheckedText
                  isDark
                  description="stay up to date with trends and tools"
                />
                <CheckedText
                  isDark
                  description="identify use cases for your business"
                />
                <CheckedText
                  isDark
                  description="implement solutions and boost your business"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto py-16 sm:py-32 px-4 bg-base-100 grid grid-cols-2 gap-12">
        <div className="flex flex-col col-span-2 lg:col-span-1">
          <motion.h2
            variants={transitions.item}
            initial="hidden"
            whileInView="show"
            className="text-3xl sm:text-4xl font-semibold mb-12 sm:leading-normal"
          >
            We seamlessly build and launch automation solutions
          </motion.h2>
          <CheckedText description="In case you need an automation hand take a look at our tailored services" />
          <Link className="w-fit mt-8" href={RouteId.root}>
            <button className="btn btn-primary">
              Solutions
              <PiTriangleLight className="rotate-90" />
            </button>
          </Link>
        </div>
        <motion.div
          variants={transitions.fadeIn}
          initial="hidden"
          whileInView="show"
          className="tooltip tooltip-neutral col-span-2 lg:col-span-1 place-self-center"
          data-tip="Prompt: a team of astronauts in black suits walking in a spaceship, neon green lighting, cinematic with lens flares, with DigitizerSpace written in large white letters on their suits."
        >
          <Image
            className="h-auto rounded-lg border-4 border-transparent hover:border-primary"
            src="/images/ai-team-digitizerspace.webp"
            alt="Ai generated image of astronauts resembling the team of DigitizerSpace"
            width={512}
            height={512}
            loading="lazy"
          />
        </motion.div>
      </section>

      <section className="container mx-auto pt-16 sm:pt-32 px-4 bg-base-100 grid grid-cols-2 gap-12">
        <div className="col-span-2 lg:col-span-1">
          <motion.div
            variants={transitions.container}
            initial="hidden"
            whileInView="show"
            className="grid sm:grid-cols-2 gap-4"
          >
            <ReviewCard
              description="That is the best way to do it. So awesome. I can 100% recommend these guys. Helped me a lot in my business. Paperless is a game changer."
              avatarURL="/images/founder-portrait.webp"
              name="Michael Baylor"
              position="Chief Technology Officer"
            />
            <ReviewCard
              description="That is the best way to do it. So awesome. I can 100% recommend these guys. Helped me a lot in my business. Paperless is a game changer."
              avatarURL="/images/founder-portrait.webp"
              name="Michael Baylor"
              position="Chief Technology Officer"
            />
            <ReviewCard
              description="That is the best way to do it. So awesome. I can 100% recommend these guys. Helped me a lot in my business. Paperless is a game changer."
              avatarURL="/images/founder-portrait.webp"
              name="Michael Baylor"
              position="Chief Technology Officer"
            />
            <ReviewCard
              description="That is the best way to do it. So awesome. I can 100% recommend these guys. Helped me a lot in my business. Paperless is a game changer."
              avatarURL="/images/founder-portrait.webp"
              name="Michael Baylor"
              position="Chief Technology Officer"
            />
          </motion.div>
        </div>
        <div className="flex flex-col col-span-2 lg:col-span-1">
          <motion.h2
            variants={transitions.item}
            initial="hidden"
            whileInView="show"
            className="text-3xl sm:text-4xl font-semibold mb-12 sm:leading-normal"
          >
            Hear from our clients
          </motion.h2>
          <motion.p
            variants={transitions.item}
            initial="hidden"
            whileInView="show"
            className="leading-relaxed"
          >
            How our clients have transformed their business with us,
            digitalized, automated and so on.
          </motion.p>
          <Link className="w-fit mt-8" href={RouteId.about}>
            <button className="btn btn-primary">
              About us
              <PiTriangleLight className="rotate-90" />
            </button>
          </Link>
        </div>
      </section>

      <section
        id="newsletter"
        className="pt-32 pb-16 sm:pt-64 sm:pb-32 px-4 bg-base-100 bg-blob-lg bg-cover bg-top"
      >
        <motion.div
          variants={transitions.fadeIn}
          initial="hidden"
          whileInView="show"
          className="container mx-auto grid grid-cols-3 gap-20 xl:gap-40 glass rounded-lg p-8 sm:p-12"
        >
          <div className="col-span-3 md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 sm:leading-normal">
              Be the first to receive our industry specific trends
            </h2>
            <p className="leading-relaxed mb-8">
              Our goal is to help small and medium sized businesses to profit
              from the current wave of technology in the automation space and to
              make use of artificial intelligence
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <CheckedText description="Never miss news, trends and special offers" />
              <CheckedText description="Bonus: get our guide for free" />
            </div>
            <EmailSignup />
          </div>
          <div className="col-span-3 md:col-span-1 place-self-center">
            <div className="rounded-lg border-primary border-2 shadow-md bg-neutral px-8 py-32 relative">
              <p className="uppercase text-center font-bold">
                10 must have automation tools and how to use them
              </p>
              <PiPlusSquareFill className="text-5xl text-primary absolute -top-8 -left-8" />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
