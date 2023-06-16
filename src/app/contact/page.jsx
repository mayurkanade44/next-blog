import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl mb-5 font-bold text-center">
        Lets Keep in Touch
      </h1>
      <div className="flex items-center gap-10">
        <div className="flex-1 h-[430px] relative">
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className="object-contain"
          />
        </div>
        <form className="flex-1 flex flex-col gap-5 ">
          <input
            type="text"
            placeholder="name"
            className="p-2 bg-transparent text-gray-200 font-bold border-2 border-gray-400"
          />
          <input
            type="text"
            placeholder="email"
            className="p-2 bg-transparent text-gray-200 font-bold border-2 border-gray-400"
          />
          <input
            type="text"
            placeholder="contact number"
            className="p-2 bg-transparent text-gray-200 font-bold border-2 border-gray-400"
          />
          <textarea
            className="p-2 bg-transparent text-gray-200 font-bold border-2 border-gray-400"
            placeholder="message"
            cols="25"
            rows="7"
          ></textarea>
          <button className="p-1 bg-green-500 cursor-pointer rounded w-20">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
