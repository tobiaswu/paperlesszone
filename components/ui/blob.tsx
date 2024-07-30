export const BlobLarge = () => {
  return (
    <div className="relative w-full max-w-lg z-10">
      <div className="absolute top-32 -left-40 w-96 h-96 bg-lime_green-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
      <div className="absolute top-32 -right-40 w-96 h-96 bg-lime_green-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-20 -right-0 w-72 h-72 bg-sinopia-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-20 -left-0 w-72 h-72 bg-sinopia-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-72 left-20 w-72 h-72 bg-sapphire-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-80 left-20 w-72 h-72 bg-sapphire-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export const BlobMedium = () => {
  return (
    <div className="relative w-full max-w-lg z-10">
      <div className="absolute top-32 -left-4 w-96 h-96 bg-lime_green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-60 h-60 bg-sinopia-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-80 left-20 w-72 h-72 bg-sapphire-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
    </div>
  );
};
