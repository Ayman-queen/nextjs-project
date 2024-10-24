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
        <h1 className="text-3xl font-bold animated-heading purple-heading">Deep Learning</h1>
        
        <p className="mt-4">
          Deep Learning, a subset of Artificial Intelligence (AI), is revolutionizing the way machines understand and interpret data. As of 2024, its applications are widespread, influencing various sectors from healthcare to finance.
        </p>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Latest Advancements in Deep Learning</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Transformers:</strong> Models like GPT and BERT have transformed natural language processing, enabling machines to understand context and nuances in human language.
          </li>
          <li>
            <strong>Generative Adversarial Networks (GANs):</strong> GANs are being used to generate realistic images and videos, with applications in art, gaming, and more.
          </li>
          <li>
            <strong>Reinforcement Learning:</strong> This technique allows models to learn optimal behaviors through trial and error, showing promise in robotics and game development.
          </li>
          <li>
            <strong>Federated Learning:</strong> A method that allows models to be trained across multiple decentralized devices, enhancing privacy and security while improving performance.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Future Implications of Deep Learning</h2>
        <p className="mt-2">
          The potential of deep learning is immense. It can enhance automation, improve predictive analytics, and enable personalized experiences in areas like education and healthcare. However, ethical considerations regarding data privacy and algorithmic bias remain critical.
        </p>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Conclusion</h2>
        <p className="mt-2">
          As we move forward in 2024, deep learning continues to reshape our technological landscape. Staying informed about these advancements is essential for leveraging their potential while addressing the ethical challenges they present.
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
