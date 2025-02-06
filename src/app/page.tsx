import {
  About,
  Contact,
  Experience,
  Hero,
  Layout,
  Skills,
} from '@/containers';

/**
 * TODO:
 * - Create a separate projects page with filters (use Vercel, Netlify, or GitHub API for automation)
 * - Migrate to Next.js App Router (`app/`) once Lottie files are fully compatible
 * - Implement test cases
 */

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <FeaturedProjects /> */}
      {/* <Projects /> */}
      <Contact />
    </Layout>
  );
}
