"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Check } from "lucide-react";

const WorkshopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("workshopRegistered") === "true") {
        setIsRegistered(true);
      }
    } catch (e) {
      // ignore localStorage errors
    }
  }, []);

  if (!isVisible) return null;

  const defaultText = "LinkedIn + Resume Workshop";
  const defaultLinkText = (
    <>
      Register Here <span className="text-base">→</span>
    </>
  );
  const defaultHref = "/workshop";

  // For registered users: no extra "View Resources" button — just a subtle status + link to workshop page
  const registeredText = "You're registered for the workshop.";
  const registeredHref = "/workshop"; // navigates to the workshop page which will show the registered view

  const bannerText = isRegistered ? registeredText : defaultText;
  const bannerHref = isRegistered ? registeredHref : defaultHref;
  const bannerLinkText = isRegistered ? null : defaultLinkText;

  const linkClasses =
    "inline-flex items-center gap-1 px-3 py-2 md:px-4 bg-blue-600 text-white font-bold text-xs md:text-sm rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg";

  return (
    <div className="fixed inset-x-0 bottom-3 md:bottom-8 px-3 md:px-0 z-[100] pb-[env(safe-area-inset-bottom)]">
      <div className="relative mx-auto w-full max-w-sm md:max-w-max flex items-center p-2 md:p-2.5 rounded-full shadow-2xl backdrop-blur-sm bg-white/10 border border-white/20">
        {/* Make the main content clickable — for registered users this leads to the workshop registered page,
            for new users it leads to the register page. */}
        <Link
          href={bannerHref}
          className="flex w-full items-center gap-2 md:gap-3 px-2 py-1 rounded-full hover:bg-white/5 transition-colors"
          aria-label={isRegistered ? "Open workshop (registered view)" : "Go to workshop registration"}
        >
          {/* Mobile: force two-line title; Desktop: single line */}
          <div className="flex-1 text-white font-medium leading-snug">
            {!isRegistered ? (
              <>
                <span className="block md:hidden text-xs sm:text-sm">
                  LinkedIn +<br />
                  Resume Workshop
                </span>
                <span className="hidden md:inline text-base">
                  {bannerText}
                </span>
              </>
            ) : (
              <span className="text-xs md:text-base">{bannerText}</span>
            )}
          </div>

          {/* If not registered show the prominent CTA button; if registered show a subtle status pill */}
          {!isRegistered ? (
            <span className={linkClasses}>
              {defaultLinkText}
            </span>
          ) : (
            <span className="flex-shrink-0 inline-flex items-center gap-1 md:gap-2 bg-green-600/10 text-green-300 px-2.5 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-green-400/20">
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-300" />
              <span>View</span>
            </span>
          )}
        </Link>

        {/* <button
          onClick={() => {
            setIsVisible(false);
          }}
          className="flex-shrink-0 p-1 ml-3 mr-1 hover:bg-white/20 rounded-full transition-colors duration-200"
          aria-label="Close banner"
          title="Close"
        >
          <X className="w-5 h-5 text-white" />
        </button> */}
      </div>
    </div>
  );
};

export default WorkshopBanner;