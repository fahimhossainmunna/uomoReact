import React, { useEffect, useState } from "react";
import Container from "../Container";
import { motion } from "framer-motion";
import womenOnee from "/src/assets/woOne.png";
import menOne from "/src/assets/mennTwo.png";

const Spring = () => {
  const targetDate = new Date("2025-10-10T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ========== MAIN BANNER ========== */}
      <div
        className="relative bg-cover bg-center bg-no-repeat w-full py-[120px] md:py-[200px] lg:py-[240px]"
        style={{
          backgroundImage: "url('/src/assets/date.png')",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center md:text-left max-w-[700px]"
          >
            <p className="text-[#ff5050] text-[14px] tracking-widest font-semibold">
              DEAL OF THE WEEK
            </p>
            <div className="w-[60px] h-[2px] bg-[#ff5050] mt-1 mx-auto md:mx-0"></div>

            <h1 className="text-[32px] sm:text-[44px] md:text-[60px] font-extrabold mt-4 text-[#2c2c2c] leading-tight">
              SPRING COLLECTION
            </h1>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-4 text-[#2c2c2c] text-[16px] font-semibold border-b-2 border-[#2c2c2c] hover:text-[#ff5050] hover:border-[#ff5050] transition"
            >
              SHOP NOW
            </motion.button>

            {/* Countdown */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-10 mt-10">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Mins", value: timeLeft.minutes },
                { label: "Sec", value: timeLeft.seconds },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="text-center"
                >
                  <p className="text-[36px] sm:text-[44px] font-bold text-[#2c2c2c]">
                    {item.value}
                  </p>
                  <p className="text-[#a1a1a1] text-[12px] uppercase tracking-wide">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>

      {/* ========== TWO IMAGE CARDS BELOW ========== */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#c62828] text-white p-10 flex flex-col justify-center h-[300px] sm:h-[350px] rounded-2xl shadow-md transition-transform duration-300"
          >
            <p className="text-sm uppercase tracking-widest opacity-80">
              Starting at $19
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-2">
              Women's T-Shirts
            </h2>
            <button className="mt-4 underline text-sm hover:text-black transition">
              Shop Now
            </button>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[350px] shadow-md group"
          >
            <img
              src={menOne}
              alt="Men"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
            <div className="relative z-10 p-10 text-white">
              <p className="text-sm uppercase tracking-widest opacity-80">
                Starting at $39
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mt-2">
                Men’s Sportswear
              </h2>
              <button className="mt-4 underline text-sm hover:text-gray-200 transition">
                Shop Now
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default Spring;
