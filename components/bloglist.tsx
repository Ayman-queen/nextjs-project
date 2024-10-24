import BlogCard from './blogcard';

interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => (
  <div className="flex flex-wrap justify-center">
    {blogs.map(blog => (
      <BlogCard key={blog.id} {...blog} />
    ))}
  </div>
);

export default BlogList;




