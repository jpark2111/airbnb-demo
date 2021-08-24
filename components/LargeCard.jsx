import Image from "next/image";
import { Fragment } from "react";
function LargeCard({ img, title, description, buttonText }) {
  return (
    <Fragment>
      <div className="relative h-96 min-w-[300px] cursor-pointer">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-1/4 left-12">
        <h3 className="text-4xl mb-3 w-64 font-bold">{title}</h3>
        <p>{description}</p>
        <button className="text-small text-white font-semibold bg-gray-900 py-2 px-4 mt-5 shadow-md rounded-lg hover:shadow-xl active:scale-90 transition duration-150">
          {buttonText}
        </button>
      </div>
    </Fragment>
  );
}

export default LargeCard;
