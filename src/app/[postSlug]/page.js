import React from 'react';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';
import { notFound } from 'next/navigation';

import { BLOG_TITLE } from '@/constants';
import { getBlogPostList, loadBlogPost } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BLOG_COMPONENTS from '@/helpers/mdx-component';

export async function generateMetadata({ params }) {
  const { postSlug } = await params;
  const { frontmatter } = await loadBlogPost(postSlug);

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: `${frontmatter.abstract}`
  }
}

async function fetchBlog(postSlug) {
  const response = await getBlogPostList(postSlug);

  if(!response) {
    return undefined;
  }

  return response;
}

async function BlogPost({ params }) {
  const { postSlug } = await params;
  const blogList = await fetchBlog(postSlug);

  const { frontmatter, content } = await loadBlogPost(postSlug);

  if(!blogList) {
    notFound();
  }

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} components={BLOG_COMPONENTS} />
      </div>
    </article>
  );
}

export default BlogPost;
