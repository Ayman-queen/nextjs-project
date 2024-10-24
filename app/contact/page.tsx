"use client"; // Mark this file as a client component

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Define comments state with an explicit type of string[]
  const [comments, setComments] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the formData to your server

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };


  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold text-blue-400 mb-6">Contact Us</h1>
        <p>If you have any questions or feedback, we'd love to hear from you!</p>
        <p>
          You can reach us via email at{' '}
          <a href="mailto:info@bloggingsite.com" className="text-blue-600 underline">
            info@bloggingsite.com
          </a>.
        </p>
        
        <form className="mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1" htmlFor="name">Your Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              className="border rounded p-2 w-full" 
              placeholder="Enter your name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mt-2">
            <label className="block mb-1" htmlFor="email">Your Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              className="border rounded p-2 w-full" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mt-2">
            <label className="block mb-1" htmlFor="subject">Subject:</label>
            <input 
              type="text" 
              id="subject" 
              name="subject"
              className="border rounded p-2 w-full" 
              placeholder="Enter subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mt-2">
            <label className="block mb-1" htmlFor="message">Your Message:</label>
            <textarea 
              id="message" 
              name="message"
              className="border rounded p-2 w-full" 
              placeholder="Write your message here" 
              rows={5} 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="mt-2 bg-blue-500 text-white rounded p-2"
          >
            Send Message
          </button>
        </form>

        
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
