// app/blogs/machine-learning/page.tsx

"use client"; // Mark this file as a client component

import Image from 'next/image'; // Import Image component
import { useEffect } from 'react';
import Link from 'next/link'; // Import Link for navigation

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
          src="/images/machine-learning.jfif" // Replace  background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="overlay" /> {/* Overlay for better readability */}
      </div>

      <main className="p-4 text-white">
        <h1 className="text-3xl font-bold animated-heading dark-heading">Machine Learning</h1>
        
        <p className="mt-4">
          Machine Learning (ML) is a subset of AI that focuses on building systems that learn from data, enabling applications in various industries. As we step into 2024, ML continues to evolve, impacting how we interact with technology.
        </p>

        <h2 className="text-2xl font-semibold mt-6 animated-heading dark-heading">Latest Advancements</h2>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Automated Machine Learning (AutoML):</strong> Tools that automate the model selection and hyperparameter tuning processes are becoming prevalent.</li>
          <li><strong>Explainable AI (XAI):</strong> Techniques for making ML models more interpretable are gaining importance, especially in regulated industries.</li>
          <li><strong>Federated Learning:</strong> Privacy-preserving machine learning techniques that allow models to be trained across decentralized data sources are on the rise.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 animated-heading dark-heading">Future Implications</h2>
        <p className="mt-2">
          As ML techniques continue to mature, their integration into everyday applications will expand, influencing areas like healthcare, finance, and smart cities, ultimately leading to more personalized and efficient solutions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 animated-heading dark-heading">Conclusion</h2>
        <p className="mt-2">
          In 2024, Machine Learning stands at a critical juncture, offering unprecedented opportunities for innovation across industries. Staying informed and adapting to these advancements will be crucial for harnessing the full potential of ML technologies.
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
          z-index: 0; /* Ensure this is below overlay and text */
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
          z-index: 1; /* Ensure overlay is above the image */
        }

        main {
          position: relative;
          z-index: 2; /* Ensure text is above the overlay */
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        .dark-heading {
          color: #f0f0f0; /* Light color for contrast */
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); /* Optional: add a shadow for better visibility */
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
