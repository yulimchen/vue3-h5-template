import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Merge class
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
