import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * class merge utility with tailwindcss
 * @param inputs 클래스 값
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * platform style utility
 */
export function platformStyle({
  web,
  mobile,
  ios,
  android,
}: {
  web?: string;
  mobile?: string;
  ios?: string;
  android?: string;
}) {
  let style = '';

  if (web) {
    style += ` web:${web}`;
  }

  if (mobile) {
    style += ` ios:${mobile} android:${mobile}`;
  }

  if (ios) {
    style += ` ios:${ios}`;
  }

  if (android) {
    style += ` android:${android}`;
  }

  return style;
}
