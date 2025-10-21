// ...existing code...
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

  const defaultText = "Workshop by Sreejit";
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
    "inline-flex items-center gap-1 px-4 py-2 bg-blue-600 text-white font-bold text-sm rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg whitespace-nowrap";

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] max-w-full md:max-w-max">
      <div
        className="relative flex items-center p-2 rounded-full shadow-2xl backdrop-blur-sm bg-white/10 border border-white/20"
      >
        {/* Make the main content clickable — for registered users this leads to the workshop registered page,
            for new users it leads to the register page. */}
        <Link
          href={bannerHref}
          className="flex items-center gap-4 px-3 py-1 rounded-full hover:bg-white/5 transition-colors"
          aria-label={isRegistered ? "Open workshop (registered view)" : "Go to workshop registration"}
        >
          <div className="flex items-center gap-3">
            <p className={`text-white font-medium text-sm md:text-base whitespace-nowrap ${isRegistered ? 'max-w-[160px] md:max-w-none truncate' : ''}`}>
              {bannerText}
            </p>

            {/* If not registered show the prominent CTA button; if registered show a subtle status pill */}
            {!isRegistered ? (
              <span className={linkClasses}>
                {bannerLinkText}
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 bg-green-600/10 text-green-300 px-3 py-1 rounded-full text-sm font-semibold border border-green-400/20">
                <Check className="w-4 h-4 text-green-300" />
                <span>View</span>
              </span>
            )}
          </div>
        </Link>

        <button
          onClick={() => {
            setIsVisible(false);
          }}
          className="flex-shrink-0 p-1 ml-3 mr-1 hover:bg-white/20 rounded-full transition-colors duration-200"
          aria-label="Close banner"
          title="Close"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default WorkshopBanner;
// ...existing code...