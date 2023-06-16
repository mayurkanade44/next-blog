import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="w-full h-[300px] relative">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className="object-cover grayscale"
        />
        <div className="absolute bottom-5 left-5 bg-green-400 p-5">
          <h1 className="">Digital Storytellers</h1>
          <h2 className="">Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="flex gap-10 mt-10">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-4xl font-bold">Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-4xl font-bold">What We Do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <button className="p-1 cursor-pointer bg-green-500 rounded w-32 hover:text-black">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
