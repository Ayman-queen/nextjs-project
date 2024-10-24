import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';

const About = () => (
  <div>
    <Header />
    <main>
      <h1>About Us</h1>
      <p>This blog is dedicated to exploring topics related to artificial intelligence and machine learning...</p>
    </main>
    <Footer />

    <Link href="/" className="text-blue-500 hover:underline">
    Back to Home
    </Link>
  </div>
);

export default About;


