"use client"; // Mark this file as a client component

import Header from '@/components/header';
import Footer from '@/components/footer';

const About = () => (
  <div className="bg-gray-50 min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center text-blue-400 mb-6">About Us</h1>
      <section className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg leading-relaxed mb-4">
          Welcome to our corner of the internet! At our blog, we dive deep into the fascinating realms of artificial intelligence and machine learning. Our goal is to unravel their complexities and explore their potential to transform our lives.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our community is at the heart of what we do. We believe that knowledge should be accessible to everyone, and we strive to create content that caters to both newcomers eager to learn and seasoned professionals seeking fresh insights.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Founded by a passionate group of tech enthusiasts, we aim to spark curiosity and foster meaningful discussions around advancements in AI and ML. We share tutorials, case studies, and thought-provoking commentary to inspire innovation and creativity.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Join us on this journey as we explore cutting-edge technologies reshaping industries and enhancing our daily lives. Together, let’s unlock the future, one blog post at a time!
        </p>
        <p className="text-lg font-bold text-center mt-6">
          Thank you for being a part of our journey. We’re excited to learn and grow with you!
        </p>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;

