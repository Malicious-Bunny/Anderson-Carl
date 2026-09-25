'use client';

import { useState } from 'react';
import { CHAT_URL } from '~/lib/constants';

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
    />
  </svg>
);

const ChatFloat = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip label */}
      <div
        className={`transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <div className="relative bg-ink-900 text-white text-sm font-semibold px-4 py-2 shadow-panel whitespace-nowrap">
          Chat with us
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-ink-900 rotate-45" />
        </div>
      </div>

      {/* Button */}
      <a
        href={CHAT_URL}
        aria-label="Chat with us"
        className="relative w-16 h-16 bg-forest-500 hover:bg-forest-600 text-white rounded-full flex items-center justify-center shadow-panel transition-all duration-300 hover:scale-110 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ChatIcon />
      </a>
    </div>
  );
};

export default ChatFloat;
