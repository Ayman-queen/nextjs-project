import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';

const blogs = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Overview of AI...',
    image: '/images/artificial-intelligence-1.avif',
    tags: ['AI', 'Tech', 'Innovation'],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Introduction to ML...',
    image: '/images/machine-learning.jfif',
    tags: ['ML', 'Data Science', 'Algorithms'],
  },
  {
    id: 'dl',
    title: 'Deep Learning',
    description: 'Understanding DL...',
    image: '/images/deep-learning.png',
    tags: ['DL', 'Neural Networks', 'AI'],
  },
  {
    id: 'mla',
    title: 'Machine Learning Algorithms',
    description: 'ML Algorithms Explained...',
    image: '/images/machine-learning-algorithms.jfif',
    tags: ['ML', 'Algorithms', 'Tech'],
  },
  {
    id: 'nn',
    title: 'Neural Networks',
    description: 'Basics of NN...',
    image: '/images/neural-network-1.jfif',
    tags: ['NN', 'AI', 'Deep Learning'],
  },
  {
    id: 'math',
    title: 'Deep Learning Mathematics',
    description: 'Math behind DL...',
    image: '/images/deep-learning-maths.jfif',
    tags: ['Math', 'DL', 'Theory'],
  },
];

const HomePage = () => (
  <div>
    <Header />
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/blogs/${blog.id}`}>
              <div className="relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={400}
                  layout="responsive"
                  objectFit="cover"
                />
                <div className="absolute top-0 left-0 p-2 bg-black bg-opacity-50 text-white text-xs rounded">
                  {blog.tags.join(', ')}
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <p className="text-gray-700">{blog.description}</p>
                <span className="text-blue-600 hover:underline">Read More</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default HomePage;

