function BoxItems({ img, children, offset, titel }) {
  return (
    <div
      className={`relative flex flex-col space-y-6 rounded-lg bg-white p-6 md:w-1/3 ${offset}`}
    >
      {/* image position */}
      <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
          {img}
        </div>
      </div>
      <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
        {titel}
      </h5>
      <p className="text-center text-gray-400 md:text-left">{children}</p>
    </div>
  );
}

export default BoxItems;
