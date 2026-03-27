import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";

const loadingMessages = [
  "Loading booking calendar...",
  "Checking available slots...",
  "Preparing your session...",
  "Almost there..."
];

export const BookingModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  // Reset loading state whenever the modal reopens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setMessageIndex(0);
    }
  }, [isOpen]);

  // Cycle through engaging loading messages
  useEffect(() => {
    let interval;
    if (isLoading && isOpen) {
      interval = setInterval(() => {
        setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isLoading, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          data-lenis-prevent="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-darker/90 backdrop-blur-xl overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-5xl h-[85vh] md:h-[80vh] bg-white border border-white/10 rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl relative"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 rounded-full bg-black/5 hover:bg-black/10 transition-colors z-20 text-black"
            >
              <X size={20} />
            </button>

            <div className="w-full h-full relative">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white">
                  <Loader2 size={40} className="text-accent animate-spin mb-6" />
                  <div className="h-6 relative w-full flex justify-center">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={messageIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm font-medium text-black/60 absolute"
                      >
                        {loadingMessages[messageIndex]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              )}
              
              <iframe 
                src="https://calendar.app.google/Y6aMcCGdKpQdAg5H6?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="relative z-10"
                onLoad={() => setIsLoading(false)}
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
