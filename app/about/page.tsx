'use client';

import { motion } from 'framer-motion';
import transitions from '@/public/transitions.json';
import Image from 'next/image';
import { PiCoinsThin, PiLightningLight, PiTimerLight } from 'react-icons/pi';
import { StatCard } from '@/components/StatCard';

export default function About() {
  return (
    <>
      <section className="bg-blob-md bg-cover lg:bg-contain bg-top">
        <div className="hero">
          <div className="hero-content text-center flex flex-col">
            <div className="max-w-6xl">
              <motion.h1
                variants={transitions.item}
                initial="hidden"
                whileInView="show"
                className="text-4xl sm:text-6xl font-bold sm:leading-relaxed sm:pt-8"
              >
                We build solutions for everyday business activities
              </motion.h1>
            </div>
            <motion.p
              variants={transitions.item}
              initial="hidden"
              whileInView="show"
              className="mt-8 max-w-xl mx-auto leading-relaxed"
            >
              We are a group of tech savvy individuals running our own
              businesses in various industries. We are passionate about solving
              our everyday problems with innovative solutions and automating as
              much as possible. Freeing up our time enables us to go after what
              we are most passionate about.
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={transitions.fadeIn}
          initial="hidden"
          whileInView="show"
          className="py-16"
        >
          <div className="container mx-auto flex flex-col gap-8 px-4 items-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <StatCard
                icon={<PiLightningLight />}
                title="Founded"
                value="2023"
              />
              <StatCard
                icon={<PiCoinsThin />}
                title="Average cost saved"
                value="$3000/m"
              />
              <StatCard
                icon={<PiTimerLight />}
                title="Average time saved"
                value="140h/m"
              />
            </div>
            <Image
              className="rounded-lg max-w-3xl w-full mt-16"
              src="/images/ai-hacker-wide.webp"
              alt="Ai generated image of a hacker in a space suit in front of a macbook."
              width={768}
              height={400}
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto max-w-2xl px-4">
        <p className="mb-4">
          We are a group of tech savvy individuals running our own businesses in
          various industries. We are passionate about solving our everyday
          problems with innovative solutions and automating as much as possible.
          Freeing up our time enables us to go after what we are most passionate
          about.
        </p>
        <p>
          We are a group of tech savvy individuals running our own businesses in
          various industries. We are passionate about solving our everyday
          problems with innovative solutions and automating as much as possible.
          Freeing up our time enables us to go after what we are most passionate
          about.
        </p>
        <h2 className="mt-16 mb-8 text-4xl font-semibold">About the founder</h2>
        <p>
          We are a group of tech savvy individuals running our own businesses in
          various industries. We are passionate about solving our everyday
          problems with innovative solutions and automating as much as possible.
        </p>
        <div className="flex gap-4 items-center my-8">
          <Image
            className="rounded-full"
            src="/images/founder-portrait.webp"
            alt="Portrait of our founder Tobias Wupperfeld"
            width={200}
            height={200}
            loading="lazy"
          />
          <p className="italic">
            &quot;We are a group of tech savvy individuals running our own
            businesses in various industries.&quot;
          </p>
        </div>
        <p>
          We are a group of tech savvy individuals running our own businesses in
          various industries. We are passionate about solving our everyday
          problems with innovative solutions and automating as much as possible.
          Freeing up our time enables us to go after what we are most passionate
          about.
        </p>
        <h2 className="mt-16 mb-8 text-4xl font-semibold">Final words</h2>
        <p>
          We are a group of tech savvy individuals running our own businesses in
          various industries. We are passionate about solving our everyday
          problems with innovative solutions and automating as much as possible.
          Freeing up our time enables us to go after what we are most passionate
          about.
        </p>
      </section>

      <section className="py-32 px-4 bg-blob-lg bg-cover bg-top">
        {/* <motion.div
          variants={transitions.fadeIn}
          initial="hidden"
          whileInView="show"
          className="container mx-auto grid grid-cols-3 gap-20 xl:gap-40 glass rounded-lg p-8 sm:p-12"
        >
          <div className="col-span-3 md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 sm:leading-normal">
              Book a consulting call with DigitizerSpace today!
            </h2>
            <p className="leading-relaxed mb-8">
              Discover how your business could implement automation and
              digitization solutions. Save costs and more benefits
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <CheckedText description="Call with the founder Tobias Wupperfeld" />
              <CheckedText description='Bonus: Get our e-book "The full tool guide" for free (value $299)' />
              <CheckedText description="100% money back guarantee - no questions asked" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary">
                Book now
                <PiTriangleLight className="rotate-90" />
              </button>
              <button className="btn btn-neutral btn-outline">
                Check out specific solutions
                <PiTriangleLight className="rotate-90" />
              </button>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 place-self-center">
            <div className="rounded-lg border-primary border-2 shadow-md bg-neutral px-8 py-32 relative">
              <p className="uppercase text-center font-bold">
                10 must have automation tools and how to use them
              </p>
              <PiPlusSquareFill className="text-5xl text-primary absolute -top-8 -left-8" />
            </div>
          </div>
        </motion.div> */}
      </section>
    </>
  );
}
