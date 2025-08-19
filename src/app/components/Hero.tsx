"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showCards, setShowCards] = useState(false);
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [mobileState, setMobileState] = useState("initial"); // "initial" or "expanded"

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setMobileState("expanded");
      } else {
        setMobileState("initial");
      }

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
        <h1 className="leading-[0.9] font-extrabold">
          <span className="block text-5xl text-gray-400">MOVE</span>
          <span className="block text-7xl text-gray-600">MONEY</span>
          <span className="block text-9xl text-gray-900">FREELY</span>
        </h1>

        {/* Phone Mockup */}
        <div className="mt-16 flex justify-center relative">
          <div className="w-80 h-[500px] border-4 border-gray-200 rounded-[2.5rem] shadow-2xl bg-white z-10 overflow-hidden relative">
            <AnimatePresence mode="wait">
              {mobileState === "initial" ? (
                <motion.div
                  key="initial"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center h-full"
                >
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-bold mb-4">
                    bp
                  </div>
                  <p className="text-gray-600 text-sm">
                    Your <span className="font-semibold">Web3 Powered</span>{" "}
                    Super App
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 h-full flex flex-col"
                >
                  {/* App Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">bp</span>
                      </div>
                      <span className="font-medium text-sm">bepay</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Balance Section */}
                  <div className="text-left mb-8">
                    <p className="text-xs text-gray-500 mb-1">
                      Est. total balance (USD)
                    </p>
                    <h2 className="text-2xl font-bold">1,450 ›</h2>
                  </div>

                  {/* Action Buttons Grid */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-2">
                        <span className="text-white text-lg">↓</span>
                      </div>
                      <span className="text-xs">Receive</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                        <span className="text-gray-600 text-lg">→</span>
                      </div>
                      <span className="text-xs">Send</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                        <span className="text-gray-600 text-lg">⚡</span>
                      </div>
                      <span className="text-xs">Swap</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                        <span className="text-gray-600 text-lg">🏦</span>
                      </div>
                      <span className="text-xs text-center leading-3">
                        Bank account
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                        <span className="text-gray-600 text-lg">⊞</span>
                      </div>
                      <span className="text-xs text-center leading-3">
                        Scan & pay
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                        <span className="text-gray-600 text-lg">💳</span>
                      </div>
                      <span className="text-xs text-center leading-3">
                        bepay ID
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                        <span className="text-gray-600 text-lg">📅</span>
                      </div>
                      <span className="text-xs">Earn</span>
                    </div>
                    <div className="col-span-1"></div>
                  </div>

                  {/* Recent Transactions */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">
                        Recent transactions
                      </span>
                      <span className="text-sm text-gray-400">View all ›</span>
                    </div>
                    <div className="text-left">
                      <span className="text-sm font-medium">Deposit</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pink border overlay for second state */}
            {mobileState === "expanded" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 border-4 border-pink-500 rounded-[2.5rem] pointer-events-none"
              />
            )}
          </div>

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
                    <span className="block text-gray-500">
                      on every spend!
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Right Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute right-50 top-32 bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl px-10 py-8 w-[420px] text-center z-20"
              >
                <p className="text-3xl font-light text-gray-500 mb-8">
                  <span className="font-bold text-gray-800">1</span> PAY.{" "}
                  <span className="font-bold text-gray-800">2</span> EARN.{" "}
                  <span className="font-bold text-gray-800">3</span> REPEAT.
                </p>
                <div className="flex justify-center gap-4">
                  <div className="bg-black text-white px-6 py-3 rounded-full text-sm flex items-center gap-2 font-medium cursor-pointer">
                    🍎 Download on the App Store
                  </div>
                  <div className="bg-black text-white px-6 py-3 rounded-full text-sm flex items-center gap-2 font-medium cursor-pointer">
                    ▶️ Get the App on Google Play
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>

        {/* Credit Card Section */}
        <div className="mt-[200px] flex justify-center">
          {showCreditCard && (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-6xl font-light text-gray-400 mb-8">
                The only{" "}
                <span className="font-semibold text-black">card</span> you'll
                ever need!
              </h2>
              <div className="relative">
                <div className="w-[500px] h-[320px] bg-black rounded-3xl mx-auto shadow-2xl relative overflow-hidden">
                  {/* Card content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    {/* Left side text */}
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                      <span className="text-gray-400 text-sm tracking-wider">
                        RuPay Debit Card
                      </span>
                    </div>

                    {/* Center logo */}
                    <div className="flex justify-center items-center h-full">
                      <div className="text-white text-4xl font-bold">
                        <div className="grid grid-cols-2 gap-1 w-16 h-16">
                          <div className="bg-white w-6 h-6"></div>
                          <div className="bg-white w-6 h-6"></div>
                          <div className="bg-white w-6 h-6"></div>
                          <div className="bg-white w-6 h-6"></div>
                        </div>
                      </div>
                    </div>

                    {/* Right side bepay text */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2">
                      <span className="text-white text-3xl font-light">
                        bepay
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
