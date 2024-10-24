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
          src="/images/neural-network.jfif" // Ensure this path is correct
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="overlay" /> {/* Overlay for better readability */}
      </div>
      
      <main className="p-4 text-white"> {/* Change text color for better visibility */}
        <h1 className="text-3xl font-bold animated-heading purple-heading">Deep learning mMathematics</h1>
        
        <p className="mt-4">
          Deep Learning relies heavily on mathematical concepts to build algorithms that can learn from vast amounts of data. As we explore these concepts in 2024, we can appreciate their foundational role in driving advancements in AI.
        </p>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Key Mathematical Concepts</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Linear Algebra:</strong> Essential for understanding neural networks, involving vectors, matrices, and operations on these entities.
          </li>
          <li>
            <strong>Calculus:</strong> Used to optimize algorithms, particularly in calculating gradients during backpropagation.
          </li>
          <li>
            <strong>Probability and Statistics:</strong> Important for understanding uncertainty in model predictions and for designing probabilistic models.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Latest Advancements in Mathematical Techniques</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Gradient Descent Variants:</strong> Improved optimization techniques that help in faster convergence of training models.
          </li>
          <li>
            <strong>Regularization Techniques:</strong> Methods like L1 and L2 regularization to prevent overfitting by adding penalties to the loss function.
          </li>
          <li>
            <strong>Advanced Activation Functions:</strong> New functions like Swish and Mish that improve network performance over traditional functions like ReLU.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Future Implications of Mathematics in Deep Learning</h2>
        <p className="mt-2">
          As deep learning techniques continue to evolve, a strong understanding of these mathematical foundations will be crucial for developing more efficient algorithms and ensuring ethical AI practices.
        </p>

        <h2 className="text-2xl font-semibold mt-6 animated-heading purple-heading">Conclusion</h2>
        <p className="mt-2">
          Mastering the mathematics behind deep learning in 2024 is essential for anyone looking to contribute to the field. These concepts will not only help in building models but also in interpreting their results and implications.
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


