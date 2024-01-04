import { RouteId } from '@/utils';
import Link from 'next/link';

export const EmailSignup = () => {
  return (
    <div>
      <div className="sm:join">
        <input
          type="email"
          className="input input-bordered input-primary w-full sm:w-72 join-item mb-4 sm:mb-0"
          placeholder="Email"
        />
        <button className="btn btn-primary w-full sm:w-fit join-item">
          Subscribe
        </button>
      </div>
      <p className="text-sm pt-8">
        By subscribing you agree with our&nbsp;
        <Link href={RouteId.privacy}>Privacy Policy</Link>&nbsp;and provide
        consent to receive updates from our company.
      </p>
    </div>
  );
};
