import { itemAnimationVariant } from '@/lib/transitions';
import { MotionWrapper } from './MotionWrapper';
import { RouteId } from '@/lib/routes';
import Link from 'next/link';

interface NotFoundProps {
  text: string;
  buttonText: string;
}

export const NotFound = ({ text, buttonText }: NotFoundProps) => {
  return (
    <div className="container mx-auto hero px-16 min-h-screen">
      <div className="hero-content">
        <MotionWrapper className="max-w-6xl" variants={itemAnimationVariant}>
          <h1 className="text-4xl sm:text-6xl font-bold sm:leading-relaxed bg-gradient-to-br from-slate-100 to-slate-300 text-transparent bg-clip-text">
            {text}
          </h1>
          <Link href={RouteId.blog}>
            <button className="btn btn-secondary btn-lg capitalize">
              {buttonText}
            </button>
          </Link>
        </MotionWrapper>
      </div>
    </div>
  );
};
