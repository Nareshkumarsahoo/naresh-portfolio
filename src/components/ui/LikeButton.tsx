import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LikeButtonProps {
  className?: string;
  showText?: boolean;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  className = '',
  showText = true,
}) => {
  const [likes, setLikes] = useState<number>(142);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    // Read from localStorage
    const savedLikes = localStorage.getItem('portfolio_likes_count');
    const savedHasLiked = localStorage.getItem('portfolio_has_liked');

    if (savedLikes) {
      setLikes(parseInt(savedLikes, 10));
    }
    if (savedHasLiked === 'true') {
      setHasLiked(true);
    }
  }, []);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);

    if (!hasLiked) {
      const newCount = likes + 1;
      setLikes(newCount);
      setHasLiked(true);
      localStorage.setItem('portfolio_likes_count', newCount.toString());
      localStorage.setItem('portfolio_has_liked', 'true');

      // Pop mini confetti heart burst
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 25,
        spread: 45,
        origin: { x, y },
        colors: ['#f43f5e', '#ec4899', '#00f0ff', '#8b5cf6'],
        scalar: 0.8,
      });
    } else {
      // Toggle back off if user clicks again
      const newCount = likes - 1;
      setLikes(newCount);
      setHasLiked(false);
      localStorage.setItem('portfolio_likes_count', newCount.toString());
      localStorage.setItem('portfolio_has_liked', 'false');
    }
  };

  return (
    <button
      onClick={handleLikeClick}
      title={hasLiked ? 'Liked! Click to unlike' : 'Like this portfolio'}
      className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border transition-all duration-300 cursor-pointer ${
        hasLiked
          ? 'bg-rose-500/15 border-rose-500/50 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
          : 'glass-panel border-white/10 text-gray-300 hover:text-rose-400 hover:border-rose-500/40 hover:bg-rose-500/10'
      } ${isAnimating ? 'scale-110' : 'scale-100'} ${className}`}
    >
      <Heart
        className={`w-4 h-4 transition-all duration-300 ${
          hasLiked
            ? 'fill-rose-500 text-rose-500 scale-110'
            : 'text-gray-300 group-hover:text-rose-400'
        } ${isAnimating ? 'animate-bounce' : ''}`}
      />
      {showText && (
        <span className="font-mono text-xs font-bold tracking-tight">
          {likes}
        </span>
      )}
    </button>
  );
};
