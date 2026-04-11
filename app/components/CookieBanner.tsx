"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy border-t border-white/10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-white/70 text-center sm:text-left">
        We use essential cookies to keep this site running. See our{" "}
        <Link href="/cookies" className="underline hover:text-white transition-colors">
          Cookie Policy
        </Link>{" "}
        for details.
      </p>
      <div className="flex gap-3 flex-shrink-0">
        <button
          onClick={handleAccept}
          className="hover:cursor-pointer duration-500 hover:opacity-90 flex justify-center items-center text-navy bg-white px-4 py-2 rounded-[75px] font-semibold text-sm"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="hover:cursor-pointer duration-500 hover:opacity-90 flex justify-center items-center text-white border-[0.5px] border-white/20 px-4 py-2 rounded-[75px] font-semibold text-sm hover:border-white/40"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
