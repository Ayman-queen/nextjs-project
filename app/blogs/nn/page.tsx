"use client"; // Mark this file as a client component

import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link'; // Import Link for navigation

const NeuralNetworksBlog = () => {
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
          src="/images/neural-network-1.jfif" // Replace with neural network background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="overlay" /> {/* Overlay for better readability */}
      </div>
      
     
      <main className="p-4 text-white"> {/* Change text color for better visibility */}
        <h1 className="text-3xl font-bold animated-heading purple-heading">Neural Networks</h1>
        
        <p className="mt-4">
          Neural Networks are a class of algorithms inspired by the human brain, designed to recognize patterns in data. As of 2024, they play a crucial role in various applications, from image recognition to natural language processing.
        </p>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">How Neural Networks Work</h2>
        <p className="mt-2">
          A neural network consists of layers of interconnected nodes (neurons) that process input data. The architecture typically includes:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Input Layer:</strong> The first layer that receives the input data.</li>
          <li><strong>Hidden Layers:</strong> Intermediate layers that transform the input into something the output layer can use.</li>
          <li><strong>Output Layer:</strong> The final layer that produces the output, such as classifications or predictions.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Latest Advancements in Neural Networks</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Deep Learning:</strong> Utilizing deeper architectures to improve performance on complex tasks.
          </li>
          <li>
            <strong>Transfer Learning:</strong> Adapting pre-trained models to new tasks, speeding up training times and enhancing performance.
          </li>
          <li>
            <strong>Explainable AI:</strong> Developing methods to make neural network predictions more interpretable and understandable.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Future Implications of Neural Networks</h2>
        <p className="mt-2">
          As neural networks evolve, their integration into areas such as autonomous systems, healthcare diagnostics, and personalized experiences will continue to grow, driving innovation and efficiency across sectors.
        </p>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Conclusion</h2>
        <p className="mt-2">
          Staying informed about advancements in neural networks in 2024 is crucial for leveraging their capabilities while considering ethical implications and ensuring responsible use of AI technologies.
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

export default NeuralNetworksBlog;
