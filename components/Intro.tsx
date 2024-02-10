'use client'; // needed for framer-motion

import IntroContent from '@/content/intro.mdx';
import { useSectionInView } from '@/hooks/useSectionInView';
import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
// import { FaGithubSquare } from 'react-icons/fa';
// import { HiDownload } from 'react-icons/hi';
// import TrackedLink from './TrackedLink';

function Home() {
  const { ref } = useSectionInView('Home', 0.5);

  // Animate the wave emoji on hover/click
  const [scope, animate] = useAnimate();
  const animateWave = () => {
    animate(scope.current, {
      rotate: [0, 10, -10, 10, 0],
      transition: {
        type: 'spring',
        stiffness: 125,
        duration: 0.7,
      },
    });
  };

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
          {/* <TrackedLink
            className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
            href="/John_Hamlin_Resume.pdf"
            tag="Resume Downloaded"
            download="John_Hamlin_Resume.pdf"
            target="_blank"
          >
            Résumé
            <HiDownload className="opacity-60 transition group-hover:scale-y-125" />
          </TrackedLink> */}

          {/* LinkedIn Button */}
          {/* <Link
            href="https://www.linkedin.com/in/hamlinjohn/"
            className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white p-4  text-[1.35rem] text-gray-900 transition hover:scale-[1.15] hover:text-gray-900 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            target="_blank"
          >
            <BsLinkedin />
            <span className="text-lg sm:hidden">LinkedIn</span>
          </Link> */}

          {/* GitHub Button */}
          {/* <Link
            href="https://github.com/johnhamlin"
            className="text-gray700 flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.5rem] transition hover:scale-[1.15] hover:text-gray-900 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            target="_blank"
          >
            <FaGithubSquare />
            <span className="text-lg sm:hidden">GitHub</span>
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
}
export default Home;