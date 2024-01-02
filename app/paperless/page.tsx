'use client';

import { motion } from 'framer-motion';
import transitions from '@/public/transitions.json';
import { CheckedText } from '@/components/CheckedText';

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
            className="my-8 max-w-xl mx-auto leading-relaxed"
          >
            Powered by paperless-ngx
          </motion.p>
          <motion.div
            variants={transitions.container}
            initial="hidden"
            whileInView="show"
            className="flex flex-col gap-4"
          >
            <CheckedText description="benefit 1" />
            <CheckedText description="benefit 2" />
            <CheckedText description="benefit 3" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
