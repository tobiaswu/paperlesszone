interface NotFoundProps {
  text: string;
}

export const NotFound = ({ text }: NotFoundProps) => {
  return (
    <div className="p-16 text-center">
      <p className="font-semibold uppercase text-error">{text}</p>
    </div>
  );
};
