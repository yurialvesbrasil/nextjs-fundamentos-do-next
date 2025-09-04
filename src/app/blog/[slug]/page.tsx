import { PostPage } from '@/templates/blog';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    robots: 'index, follow',
    openGraph: {
      images: [post.image ?? 'https://nextjs-fundamentos-do-next.vercel.app/op-image.jpg'],
    },
  };
}

export const revalidate = 60;

//Tenta gerar página que ainda não foi gerada em build
export const dynamicParams = true;


export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);
  console.log(slug);
  if (!post) {
    notFound();
  }

  return <PostPage post={post} />;
}