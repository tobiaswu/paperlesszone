'use client';

import { motion } from 'framer-motion';
import transitions from '@/public/transitions.json';
import { CheckedText } from '@/components/CheckedText';
import Image from 'next/image';
import {
  PiArticleLight,
  PiCalculatorLight,
  PiCloudCheckLight,
  PiDesktopTowerLight,
  PiDownloadLight,
  PiFileArrowDownLight,
  PiHardDrivesLight,
  PiHourglassMediumLight,
  PiLightbulbFilamentLight,
  PiMedalLight,
  PiNumberSquareOneLight,
  PiNumberSquareThreeLight,
  PiNumberSquareTwoLight,
  PiQuestionLight,
  PiScanLight,
  PiSignInLight,
  PiWrenchLight,
} from 'react-icons/pi';
import { SolutionCard } from '@/components/SolutionCard';
import { PricingCard } from '@/components/PricingCard';

export default function Paperless() {
  return (
    <>
      <div className="hero">
        <div className="hero-content text-center flex flex-col">
          <div className="max-w-6xl">
            <motion.h1
              variants={transitions.item}
              initial="hidden"
              whileInView="show"
              className="text-4xl sm:text-6xl font-bold sm:leading-relaxed sm:pt-8"
            >
              Transform your physical documents into a searchable online archive
            </motion.h1>
          </div>
          <motion.p
            variants={transitions.item}
            initial="hidden"
            whileInView="show"
            className="mt-8 mb-16 max-w-xl mx-auto leading-relaxed"
          >
            We are a group of tech savvy individuals running our own businesses
            in various industries. We are passionate about solving our everyday
            problems with innovative solutions and automating as much as
            possible. Freeing up our time enables us to go after what we are
            most passionate about.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-12">
            <Image
              src="https://docs.paperless-ngx.com/assets/logo_full_white.svg"
              alt="White logo of paperless-ngx"
              width={384}
              height={184}
              loading="lazy"
            />
            <motion.div
              variants={transitions.container}
              initial="hidden"
              whileInView="show"
              className="flex flex-col gap-4"
            >
              <CheckedText description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
              <CheckedText description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
              <CheckedText description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
            </motion.div>
          </div>
        </div>
      </div>

      <Image
        className="container mx-auto pt-16 px-4"
        src="https://docs.paperless-ngx.com/assets/screenshots/documents-smallcards-dark.png"
        alt="paperless-ngx dashboard with tagged documents"
        width={1920}
        height={1080}
        loading="lazy"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiQuestionLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">What do I need?</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
          <SolutionCard
            icon={<PiDownloadLight />}
            description="paperless-ngx open source software"
            url="https://github.com/paperless-ngx/paperless-ngx"
          />
          <SolutionCard
            icon={<PiScanLight />}
            description="A scanner that is capable of sending files to a folder (e.g. Fujitsu ScanSnap)"
            url="https://github.com/paperless-ngx/paperless-ngx"
          />
          <SolutionCard
            icon={<PiDesktopTowerLight />}
            description="A computer (ideally a server) where you want to store your files (e.g. Synology NAS)"
            url="https://github.com/paperless-ngx/paperless-ngx"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiHourglassMediumLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">
            How does the installation work?
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <ul className="mt-8">
          <li className="flex flex-col gap-4 mb-8">
            <PiNumberSquareOneLight className="text-4xl text-primary" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="col-span-2 flex flex-col sm:flex-row gap-2">
                <SolutionCard
                  icon={<PiHardDrivesLight />}
                  description="Install on your own server (NAS, company infrastructure)"
                />
                <div className="divider sm:divider-horizontal">OR</div>
                <SolutionCard
                  icon={<PiCloudCheckLight />}
                  description="Install on external server infrastructure you rent"
                />
              </div>
            </div>
          </li>
          <li className="flex flex-col gap-4 mb-8">
            <PiNumberSquareTwoLight className="text-4xl text-primary" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3">
              <SolutionCard
                icon={<PiWrenchLight />}
                description="Configure your scanner to drop files in paperless"
              />
            </div>
          </li>
          <li className="flex flex-col gap-4">
            <PiNumberSquareThreeLight className="text-4xl text-primary" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3">
              <SolutionCard
                icon={<PiSignInLight />}
                description="Configure access rights, login web portal, test run"
              />
            </div>
          </li>
        </ul>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiQuestionLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">How to use paperless-ngx?</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
          <SolutionCard
            icon={<PiFileArrowDownLight />}
            description="Our full guide (coming soon). Subscribe to get notified"
            url="/#newsletter"
          />
          <SolutionCard
            icon={<PiLightbulbFilamentLight />}
            description="How to backup & more tricks (coming soon)"
          />
          <SolutionCard
            icon={<PiArticleLight />}
            description="Check out our curated articles about paperless-ngx"
            url="/blog?tag=paperless"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiMedalLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">Our offer</h2>
        </div>
        <h3 className="text-3xl mb-4">Sub headline</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
          <SolutionCard
            icon={<PiFileArrowDownLight />}
            description="Our full guide (coming soon). Subscribe to get notified"
            url="/#newsletter"
          />
          <SolutionCard
            icon={<PiLightbulbFilamentLight />}
            description="How to backup & more tricks (coming soon)"
          />
          <SolutionCard
            icon={<PiArticleLight />}
            description="Check out our curated articles about paperless-ngx"
            url="/blog?tag=paperless"
          />
          <SolutionCard
            icon={<PiArticleLight />}
            description="Check out our curated articles about paperless-ngx"
            url="/blog?tag=paperless"
          />
          <SolutionCard
            icon={<PiArticleLight />}
            description="Check out our curated articles about paperless-ngx"
            url="/blog?tag=paperless"
          />
          <SolutionCard
            icon={<PiArticleLight />}
            description="Check out our curated articles about paperless-ngx"
            url="/blog?tag=paperless"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-4 items-center mb-8">
          <PiCalculatorLight className="text-3xl text-primary" />
          <h2 className="text-4xl font-semibold">Pricing</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <div className="mt-8">
          <PricingCard />
        </div>
      </div>
    </>
  );
}
