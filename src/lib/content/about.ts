import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few skills I’ve gathered over the years:',
    items: [
      'IT Management & Digital Solutions',
      'Business Development & Sales Strategy',
      'Financial Inclusion & Agency Banking',
      'Project Planning & Execution',
      'Stakeholder Management',
      'Agile/Scrum Methodologies',
      'Leadership & Team Development',
      'Risk Assessment & Compliance',
      'Data Analysis & Problem-Solving',
    ],
  },
  img: '/tee.jpeg',
};
