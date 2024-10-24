"use client"; // Mark this file as a client component

import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';

const Blogs = () => {
  useEffect(() => {
    const headings = document.querySelectorAll('.animated-heading');
    headings.forEach((heading) => {
      heading.classList.add('fade-in');
    });
  }, []);

  return (
    <div className="background-image">
      

      <div className="image-container">
        <Image
          src="/images/artificial-intelligence-II.jfif"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="overlay" />
      </div>
      
      <main className="p-4 text-white">

        <h1 className="text-3xl font-bold animated-heading purple-heading">Artificial Intelligence</h1>
        
        <p className="mt-4">
          Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn. As of 2024, AI has made significant strides, influencing various industries and aspects of daily life.
        </p>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Latest Advancements in AI</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Generative AI:</strong> Tools like ChatGPT and DALL-E continue to evolve, producing more realistic content, including text, images, and even video.
          </li>
          <li>
            <strong>AI in Healthcare:</strong> AI algorithms are now assisting in diagnostics, predicting patient outcomes, and personalizing treatment plans.
          </li>
          <li>
            <strong>AI Ethics and Regulation:</strong> As AI becomes more pervasive, discussions around ethics and regulation are at the forefront, ensuring responsible use of technology.
          </li>
          <li>
            <strong>Autonomous Systems:</strong> Advances in robotics and autonomous vehicles are reshaping industries like transportation and logistics, increasing efficiency and safety.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Future Implications of AI</h2>
        <p className="mt-2">
          The implications of AI are vast. From enhancing productivity in various sectors to creating new job opportunities and challenges, the landscape is changing rapidly. As we move forward, it’s crucial to balance innovation with ethical considerations.
        </p>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Conclusion</h2>
        <p className="mt-2">
          As we embrace the advancements of AI in 2024, it's essential to stay informed and engaged with these technologies. They hold the potential to transform our lives in ways we are just beginning to understand.
        </p>

        {/* Back to Home Link */}
        <Link href="/" className="text-lg font-semibold underline mt-4 block">
          Back to Home
        </Link>
      </main>
  
      
      <style jsx>{`
        .background-image {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .image-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 1;
        }

        main {
          position: relative;
          z-index: 2;
        }

        header {
          position: relative; 
          z-index: 10; 
          background-color: rgba(0, 0, 128, 0.8);
        }

        h1, a {
          text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.8);
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        .purple-heading {
          color: #800080;
          text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Blogs;


