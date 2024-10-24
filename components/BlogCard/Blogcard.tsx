import Link from 'next/link';
import styles from '../styles/BlogCard.module.css';

interface BlogCardProps {
  blog: {
    slug: string;
    title: string;
    description: string;
    image: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className={styles.card}>
      <img src={blog.image} alt={blog.title} className={styles.image} />
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <Link href={`/${blog.slug}`}>
        <a className={styles.readMore}>Read More</a>
      </Link>
    </div>
  );
};

export default BlogCard;
