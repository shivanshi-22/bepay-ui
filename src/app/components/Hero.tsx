"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [showCards, setShowCards] = useState(false);
  const [showCreditCard, setShowCreditCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 150) setShowCards(true);
      else setShowCards(false);

      if (scrollY > 400) setShowCreditCard(true);
      else setShowCreditCard(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">bp</span>
          </div>
          <span className="font-semibold">bepay</span>
        </div>

        <nav className="flex items-center gap-8">
          <span className="text-sm font-medium">PERSONAL</span>
          <span className="text-sm text-gray-500">BUSINESS</span>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <span className="w-4 h-3 border border-gray-400 rounded-sm"></span>
            CRYPTO CARD
          </span>
        </nav>

        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm">
          📱 Download bepay app
        </button>
      </header>

      <section className="text-center mt-20 relative">
        {/* Main Heading */}
        <div className="text-center leading-[0.85]">
          <h1 className="font-light text-gray-400 text-[6vw] tracking-tight">
            MOVE
          </h1>
          <h1 className="font-semibold text-gray-600 text-[10vw] tracking-tight -mt-[0.5vw]">
            MONEY
          </h1>
          <h1 className="font-extrabold text-gray-900 text-[16vw] tracking-tight -mt-[1vw]">
            FREELY
          </h1>
        </div>

        {/* Phone Image */}
        <div className="flex justify-center relative -mt-[2vw]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {showCards ? (
              <img
                src="/image.png"
                alt="bepay mobile app"
                className="w-80 h-auto max-h-[500px] object-contain drop-shadow-2xl"
              />
            ) : (
              <div className="w-80 h-[500px] border-4 border-gray-200 rounded-[2.5rem] bg-white drop-shadow-2xl flex flex-col items-center justify-start pt-10">
                {/* 👆 moved icon up */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-bold mb-4 mx-auto rounded">
                    bp
                  </div>
                  <p className="text-gray-600 text-sm">
                    Your <span className="font-semibold">Web3 Powered</span>{" "}
                    Super App
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Floating Cards */}
          {showCards && (
            <>
              {/* Left Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute left-74 top-16 bg-white rounded-2xl px-5 py-4 w-72 flex flex-col gap-5 text-left border border-gray-200 z-20"
              >
                {/* FD returns */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black flex items-center justify-center rounded-lg">
                    <span className="text-white text-xl">₹</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">9%*</span> returns on FDs!
                  </p>
                </div>

                {/* Cashback */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black flex items-center justify-center rounded-lg">
                    <span className="text-white text-xl">💳</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Up to <span className="font-bold">7% cashback & rewards</span>
                    <span className="block text-gray-500">on every spend!</span>
                  </p>
                </div>
              </motion.div>

              {/* Pay Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute right-50 top-16 z-20"
              >
                <img
                  src="/pay.png"
                  alt="Pay Earn Repeat"
                  className="w-auto h-auto object-contain max-w-[400px]"
                />
              </motion.div>

              {/* Download Buttons Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute right-50 top-40 z-20"
              >
                <img
                  src="/download.png"
                  alt="Download App Store and Google Play"
                  className="w-auto h-auto object-contain max-w-[350px]"
                />
              </motion.div>
            </>
          )}
        </div>

        {/* Credit Card Section */}
        <div className="mt-40 flex flex-col items-center pb-20">
          {showCreditCard && (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full px-8 md:px-20"
            >
              {/* Big heading aligned left */}
              <h2 className="text-[10vw] md:text-[8vw] font-light leading-tight text-left max-w-[80%]">
                <span className="text-gray-400">The only </span>
                <span className="text-black font-semibold">card</span>
                <span className="text-gray-400"> you’ll </span>
                <span className="text-gray-400 block">ever need!</span>
              </h2>

              {/* Centered large card image */}
              <div className="relative mt-12 flex justify-center">
                <img
                  src="/card.png"
                  alt="bepay debit card"
                  className="w-[70vw] md:w-[45vw] max-w-[800px] h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Debug info */}
        <div className="fixed top-4 left-4 bg-black text-white p-2 rounded text-xs z-50">
          showCreditCard: {showCreditCard ? "true" : "false"}
        </div>
      </section>
    </div>
  );
}
