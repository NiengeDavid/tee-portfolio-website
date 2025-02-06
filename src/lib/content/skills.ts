import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Digital Marketing Solutions',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/cloudinfra.json',
        dark: '/lotties/cloudinfra.json',
      },
      points: [
        'Providing digital marketing solutions, including content creation, social media management, and ad campaign execution',
        'Managing websites and Search Engine Optimization (SEO)',
        'Capturing and editing multimedia content for community engagement.',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'Google search console', icon: 'logos:google-search-console' },
        { name: 'Google', icon: 'logos:google-icon' },
        { name: 'linkedIn', icon: 'logos:linkedin-icon' },
        { name: 'messenger', icon: 'logos:messenger' },
        {
          name: 'telegram',
          icon: 'logos:telegram',
        },
        { name: 'twitter', icon: 'logos:twitter' },
        { name: 'whatsApp', icon: 'logos:whatsapp-icon' },
        { name: 'youtube', icon: 'logos:youtube-icon' },
        { name: 'zoom', icon: 'logos:zoom-icon' },
        // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'pinterest', icon: 'logos:pinterest' },
        { name: 'instagram', icon: 'logos:instagram-icon' },
        { name: 'facebook', icon: 'logos:facebook' },
        { name: 'adobe tools', icon: 'logos:adobe' },
      ],
    },
    {
      id: getId(),
      title: 'Project Planning & Execution',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Ensuring seamless coordination from ideation to completion. By leveraging structured frameworks and agile methodologies.',
        'Helping teams stay on track, meet deadlines, and optimize resources effectively.',
        'Focusing on strategy, efficiency, and risk management to deliver successful outcomes for businesses and organizations',
      ],
      softwareSkills: [
        { name: 'google sheets', icon: 'simple-icons:googlesheets' },
        { name: 'asana', icon: 'simple-icons:asana' },
        { name: 'clickup', icon: 'simple-icons:clickup' },
        { name: 'notion', icon: 'logos:notion-icon' },
      ],
    },
  ],
};
