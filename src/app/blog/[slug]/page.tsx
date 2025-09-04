import { PostPage } from '@/templates/blog';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

type BlogPostPage = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;

//Tenta gerar página que ainda não foi gerada em build
export const dynamicParams = true;


export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPage) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);
  console.log(slug);
  if (!post) {
    notFound();
  }

  return <PostPage post={post} />;
}