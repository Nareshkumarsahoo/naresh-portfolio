import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Konami Code Listener helper: Up Up Down Down Left Right Left Right B A
const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

export function listenForKonamiCode(onSuccess: () => void): () => void {
  let index = 0;
  
  const handler = (e: KeyboardEvent) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    const expected = KONAMI_CODE[index].length === 1 ? KONAMI_CODE[index].toLowerCase() : KONAMI_CODE[index];
    
    if (key === expected) {
      index++;
      if (index === KONAMI_CODE.length) {
        onSuccess();
        index = 0;
      }
    } else {
      index = 0;
    }
  };

  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}
