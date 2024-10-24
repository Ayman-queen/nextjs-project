// BlogCard.tsx

import Link from 'next/link';

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, description, image }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <Link href={`/blogs/${id}`} className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Read More</Link>
    </div>
  </div>
);

export default BlogCard;

