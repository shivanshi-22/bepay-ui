export default function PhoneShowcase() {
  return (
    <section className="relative flex justify-center mt-32 mb-32">
      {/* Phone Mockup */}
      <div className="relative w-[320px] h-[640px] rounded-[2rem] shadow-2xl border border-gray-200 bg-white overflow-hidden z-10">
        <img
          src="/phone-ui.png"
          alt="bepay app"
          className="w-full h-full object-cover"
        />
      </div>

      {/* LEFT floating card */}
      <div className="absolute left-[15%] top-1/3 bg-white shadow-xl rounded-2xl px-6 py-5 w-72 z-20">
        <p className="flex items-center text-sm font-medium">
          <span className="text-2xl mr-2">💰</span>
          9%* returns on FDs!
        </p>
        <p className="flex items-center text-sm mt-4 font-medium">
          <span className="text-2xl mr-2">₹</span>
          Up to 7% cashback & rewards on every spend!
        </p>
      </div>

      {/* RIGHT floating card */}
      <div className="absolute right-[15%] top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-2xl px-6 py-6 w-80 text-center z-20">
        <p className="text-lg font-semibold text-gray-600">
          1. PAY. 2. EARN. 3. REPEAT.
        </p>

        {/* Store Buttons */}
        <div className="flex justify-center gap-3 mt-4">
          <img
            src="/appstore-badge.png"
            alt="App Store"
            className="h-12"
          />
          <img
            src="/googleplay-badge.png"
            alt="Google Play"
            className="h-12"
          />
        </div>
      </div>
    </section>
  );
}
