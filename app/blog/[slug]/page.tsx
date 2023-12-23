export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return <>Blog post: {slug}.</>;
}
