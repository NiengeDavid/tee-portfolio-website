import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'tavershima (caleb) achir.',
  tagline: 'Digital Marketer | BRM at Moniepoint',
  description:
    'A results-driven IT, Tech, and Business Lead professional with a strong background in digital banking, sales, and technology-driven business solutions.',
  specialText: 'Currently available for freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
