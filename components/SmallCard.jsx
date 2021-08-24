import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center mt-4 space-x-4 md:space-x-5 sm:mr-4 rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-100 transition duration-150 transform ease-out">
      <div className="relative h-16 w-16">
        <Image
          src={img}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
