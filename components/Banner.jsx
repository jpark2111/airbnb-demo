import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[19rem] sm:h-[25rem] md:h-[28rem] lg:h-[34rem] xl:h-[39rem] 2xl:h-[44rem]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 text-center w-full">
        <p className="text-sm sm:text-lg">Where to go?</p>
        <button className="text-purple-400 font-semibold bg-white py-3 px-8 mt-2 shadow-md rounded-full hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
