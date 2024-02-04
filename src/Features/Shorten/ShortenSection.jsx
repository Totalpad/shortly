import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { useRef, useState } from "react";
import { setLoading, setOriginalUrl, setShortUrl } from "./shortSlice";
import Spinner from "../Spinner";

function ShortenSection() {
  const schema = yup
    .object({
      originalLink: yup
        .string()
        .url("Please enter a valid URL")
        .required("Link is required"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const [isCopied, setIsCopied] = useState(null);
  const linkToCopy = useRef(null);

  const handleCopy = () => {
    const linkText = linkToCopy.current.innerText;
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = linkText;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setIsCopied(true);

    // Reset the "Copied" state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const dispatch = useDispatch();
  const { originalUrl, loading, shortUrl } = useSelector(
    (state) => state.short,
  );

  async function getDataFromApi(url) {
    dispatch(setLoading(true));
    dispatch(setOriginalUrl(url));

    try {
      const response = await fetch(
        `https://is.gd/create.php?format=json&url=${url}`,
      );
      if (!response.ok)
        throw new Error("Error wiht response from an API server");
      const data = await response.json();

      dispatch(setShortUrl(data.shorturl));
    } catch (error) {
      throw new Error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <section id="shorten" className="ralative bg-gray-100">
      <div className="mx-auto max-w-4xl space-y-6 p-6">
        {/* form */}
        <form
          onSubmit={handleSubmit((data) => {
            getDataFromApi(data.originalLink);

            reset();
          })}
          id="link-form"
          className=" relative -mt-20 flex w-full flex-col space-y-4 rounded-lg bg-darkViolet p-10 md:flex-row md:space-x-3 md:space-y-0
          "
        >
          <input
            type="text"
            {...register("originalLink", { required: "Link is required" })}
            placeholder="Shorten a link is here"
            className={`flex-1 rounded-lg border-2 p-3 placeholder-yellow-500 focus:outline-none ${errors?.originalLink && ` border-red`}`}
            disabled={loading}
          />
          <button className=" rounded-lg bg-cyan px-10 py-3 text-white duration-150 hover:bg-cyanLight active:opacity-75 md:py-2 ">
            {loading ? (
              <span className="justify- flex items-center justify-center space-x-2 ">
                <Spinner />
                <p>Loading...</p>
              </span>
            ) : (
              "Shorten it!"
            )}
          </button>

          <div className="absolute bottom-3 left-7 px-3 text-sm italic text-red md:px-0">
            {errors.originalLink?.message}
          </div>
        </form>

        {/* link1    */}
        <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-6 md:flex-row">
          {loading ? (
            <span className="justify- flex items-center justify-center space-x-2 ">
              <Spinner />
              <p>Loading...</p>
            </span>
          ) : (
            <>
              <p className="text-center font-bold text-darkViolet md:text-left">
                {originalUrl}
              </p>

              <div className="flex flex-1 flex-col items-center justify-end  space-y-2 md:flex-row md:space-x-4  md:space-y-0">
                <p
                  className="text-center font-bold text-cyan md:text-left "
                  ref={linkToCopy}
                >
                  {shortUrl}
                </p>
                <button
                  className=" rounded-lg bg-cyan p-2 px-8 text-white duration-150 hover:bg-darkViolet hover:shadow-md active:opacity-75"
                  onClick={handleCopy}
                >
                  {isCopied ? "Copied!" : "Copy"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ShortenSection;
