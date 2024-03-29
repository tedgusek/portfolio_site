'use client'; // needed for framer-motion

import IntroContent from '@/content/intro.mdx';
import { useSectionInView } from '@/hooks/useSectionInView';
import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
// import TrackedLink from './TrackedLink';

function Home() {
  const { ref } = useSectionInView('Home', 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-5xl w-full scroll-mt-[100rem] text-center sm:mb-0 "
    >
      <div className="flex flex-col items-center justify-center">
       
        {/* Leading changes the line spacing. Need the ! to override the line spacing in prose-2xl */}
        <motion.div
          className="prose prose-1xl mb-10 mt-4 px-4 font-medium dark:prose-invert prose-p:!leading-[1.5] sm:prose-p:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <IntroContent />
        </motion.div>

        {/* Contact Buttons */}

        <motion.div
          className="flex flex-col gap-4 px-4 text-lg font-medium sm:flex-row"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          {/* Contact Me Button */}
          <Link
            href={'mailto:theohgusek@gmail.com?subject=Hello%20Ted!'}
            className="group flex items-center gap-2 rounded-full bg-teal-400 px-7 py-3 text-gray-600 outline-none transition-all hover:scale-110 hover:bg-teal-300 focus:scale-110 active:scale-105"
            target="_blank"
          >
            Email me{' '}
            <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>

          {/* Resume Button */}
          <Link
            className="group flex items-center gap-2 rounded-full bg-teal-400 px-7 py-3 text-gray-600 outline-none transition-all hover:scale-110 hover:bg-teal-300 focus:scale-110 active:scale-105"
            href="/Ted_Gusek_Resume_Software_Engineer.pdf"
            // tag="Resume Downloaded"
            download="Ted_Gusek_Resume_Software_Engineer.pdf"
            target="_blank"
          >
            Résumé
            <HiDownload className="opacity-60 transition group-hover:scale-y-125" />
          </Link>

          {/* LinkedIn Button */}
          <Link
            href='https://www.linkedin.com/in/tedgusek/'
            className="flex items-center justify-center gap-2 rounded-full border border-black/10 dark:bg-teal-400 p-4 text-[1.35rem] dark:text-gray-600 transition-all hover:scale-[1.15] hover:bg-teal-300  active:scale-105 "
            target="_blank"
          >
            <BsLinkedin />
            <span className="text-lg sm:hidden">LinkedIn</span>
          </Link>

          {/* GitHub Button */}
          <Link
            href="https://github.com/tedgusek"
            className="flex items-center justify-center gap-2 rounded-full border border-black/10 dark:bg-teal-400 p-4 text-[1.35rem] dark:text-gray-600 transition-all hover:scale-[1.15] hover:bg-teal-300  active:scale-105 "
            target="_blank"
          >
            <FaGithubSquare />
            <span className="text-lg sm:hidden">GitHub</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
export default Home;