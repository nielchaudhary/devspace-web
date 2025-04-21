'use client';

import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number;
}

// Simple emoji detection regex that covers most emojis including modifiers
const emojiRegex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/u;

const isEmoji = (word: string) => {
  // Check if the entire word is an emoji or emoji + modifiers
  // Trim spaces just in case
  const trimmed = word.trim();
  // For your specific emoji 🤝🏻, it is actually two unicode chars: 🤝 +🏻 (skin tone modifier)
  // So check if the whole trimmed word matches emoji regex or contains emoji chars only
  // Here we check if the word contains only emoji characters and modifiers
  // A simple approach: test if the word contains at least one emoji and no letters/numbers
  // For more robust detection, you can use a library like emoji-regex, but this simple check suffices here

  // Check if word contains any letter or digit
  const hasAlphaNum = /[a-zA-Z0-9]/.test(trimmed);
  if (hasAlphaNum) return false;

  // Check if it contains emoji characters
  return emojiRegex.test(trimmed);
};

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.2,
}: TextGenerateEffectProps) => {
  const wordsArray = words.split(' ');

  const wordVariants = {
    hidden: {
      opacity: 0,
      filter: filter ? 'blur(4px)' : 'none',
    },
    visible: (i: number) => ({
      opacity: 1,
      filter: filter ? 'blur(0px)' : 'none',
      transition: {
        duration,
        delay: i * staggerDelay,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className={cn('font-bold', className)}>
      {wordsArray.map((word, idx) => {
        const isWordEmoji = isEmoji(word);

        return (
          <motion.h1
            key={word + idx}
            custom={idx}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            className={cn()}
            style={{
              backgroundImage: isWordEmoji
                ? 'none'
                : 'linear-gradient(to right, rgb(174, 13, 93), rgb(177, 139, 212))',
              WebkitBackgroundClip: isWordEmoji ? 'unset' : 'text',
              backgroundClip: isWordEmoji ? 'unset' : 'text',
              color: isWordEmoji ? 'inherit' : 'transparent',
              display: 'inline-block',
              marginRight: '0.25em',
              userSelect: 'none',
            }}
          >
            {word}
          </motion.h1>
        );
      })}
    </div>
  );
};
