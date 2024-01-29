import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

  return (
    <section id="shorten" className="ralative bg-gray-100">
      <div className="mx-auto max-w-4xl space-y-6 p-6">
        {/* form */}
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
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
            className="flex-1 rounded-lg border-2 p-3 placeholder-yellow-500 focus:outline-none"
          />
          <button className=" rounded-lg bg-cyan px-10 py-3 text-white duration-150 hover:bg-cyanLight active:opacity-75 md:py-2 ">
            Shorten it!
          </button>

          <div className="absolute bottom-3 left-7 px-3 text-sm italic text-red md:px-0">
            {errors.originalLink?.message}
          </div>
        </form>

        {/* link1    */}
        <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-6 md:flex-row">
          <p className="text-center font-bold text-darkViolet md:text-left">
            https://frontendmentor.io
          </p>

          <div className="flex flex-1 flex-col items-center justify-end  space-y-2 md:flex-row md:space-x-4  md:space-y-0">
            <p className="text-center font-bold text-cyan md:text-left ">
              https://rel.ink/k4IKyk
            </p>
            <button className=" rounded-lg bg-cyan p-2 px-8 text-white duration-150 hover:bg-darkViolet hover:shadow-md active:opacity-75">
              Copy
            </button>
          </div>
        </div>

        {/* to do copy on click  */}
      </div>
    </section>
  );
}

export default ShortenSection;
