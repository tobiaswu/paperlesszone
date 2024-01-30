import Link from 'next/link';

export interface ArticleContentRefProps {
  title: string;
}

export const ArticleContentRef = ({ title }: ArticleContentRefProps) => {
  return (
    <Link href={`#${title}`}>
      <button className="border-none bg-transparent appearance-none text-neutral-500 text-left text-xl hover:text-2xl hover:font-semibold hover:text-primary my-2">
        {title}
      </button>
    </Link>
  );
};
