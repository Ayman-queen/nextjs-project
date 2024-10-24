"use client"; // Mark this file as a client component

import Image from 'next/image';
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
          src="/images/machine-learning.jfif" // Replace with ML bg image
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="overlay" /> {/* Overlay for better readability */}
      </div>
      
      <main className="p-4 text-white"> {/* Change text color for better visibility */}
        <h1 className="text-3xl font-bold animated-heading purple-heading">Machine Learning Algorithms</h1>
        
        <p className="mt-4">
          Machine Learning (ML) involves algorithms that enable computers to learn from data. As of 2024, ML continues to transform industries, enhancing how we analyze data and make predictions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Key Algorithms</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Decision Trees:</strong> A simple yet effective method for classification and regression tasks.
          </li>
          <li>
            <strong>Support Vector Machines:</strong> Powerful for classification problems, especially in high-dimensional spaces.
          </li>
          <li>
            <strong>Neural Networks:</strong> Particularly effective for complex tasks such as image and speech recognition.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Latest Advancements in ML</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Automated Machine Learning (AutoML):</strong> Streamlining the process of model selection and tuning.
          </li>
          <li>
            <strong>Explainable AI (XAI):</strong> Enhancing the interpretability of complex ML models.
          </li>
          <li>
            <strong>Federated Learning:</strong> Training models across decentralized data while preserving privacy.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Future Implications of ML</h2>
        <p className="mt-2">
          As ML technologies mature, their integration into everyday applications will reshape industries like healthcare, finance, and transportation, fostering innovation and efficiency.
        </p>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Conclusion</h2>
        <p className="mt-2">
          Staying informed about ML advancements in 2024 is crucial for harnessing their full potential while navigating ethical considerations and ensuring responsible use of technology.
        </p>

        {/* Back to Home Link at the end */}
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

        .purple-heading {
          color: #800080; /* Purple color */
          text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8); /* Optional: add a light shadow for brightness */
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

