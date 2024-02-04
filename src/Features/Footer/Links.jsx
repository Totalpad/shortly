function Links({ children, header }) {
  return (
    <div className="flex w-full flex-col items-center md:items-start">
      <h2 className="mb-5 font-bold capitalize text-white">{header}</h2>
      <div className="flex flex-col items-center space-y-3 md:items-start">
        {children}
      </div>
    </div>
  );
}

export default Links;
