// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// import Footer from '@/components/Footer';
// import ThemeSwitch from '@/components/ThemeSwitch';
import ActiveSectionContextProvider from '@/context/ActiveSectionContextProvider';
// import ThemeContextProvider from '@/context/ThemeContextProvider';
// import { ClerkProvider } from '@clerk/nextjs';
// import { GoogleAnalytics } from '@next/third-parties/google';
// import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theo Gusek Software Engineer portfolio",
  description: "A page to share a couple projects and offer services",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      <body
        className={`${inter.className} sm:pt-38 relative bg-gray-50 pt-8 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}
      >
        {/* Display two subtle pops of color to the top of the page to add some visual interest */}
        <div className="absolute left-[-30rem] top-[0rem] -z-10 h-[15.25rem] w-[5.25rem] rounded-full bg-[#008080] blur-[10rem] dark:bg-[#008080] dark:bg-opacity-75 sm:w-[68.75rem]"></div>
        {/* <div className="xl:left=[-15rem] absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] 2xl:left-[-5rem] "></div> */}
        {/* <ClerkProvider> */}
          {/* <ThemeContextProvider> */}
            <ActiveSectionContextProvider>
              {children}
              {/* <Footer /> */}
            </ActiveSectionContextProvider>
            {/* <ThemeSwitch /> */}
          {/* </ThemeContextProvider> */}
        {/* </ClerkProvider> */}
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
        {/* {GOOGLE_ANALYTICS_ID ? (
          <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
        ) : null} */}
      </body>
    </html>
  );
}