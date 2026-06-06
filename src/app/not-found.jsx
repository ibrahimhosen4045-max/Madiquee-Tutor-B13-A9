import Image from "next/image";
import Link from "next/link";
import image from "@/assets/notfound.webp"

const Notfound = () => {

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      
      <div className="text-center max-w-xl">
        
        <Image src={image} alt=""  className=" animate-pulse"/>

        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="mt-3 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link href={'/'}>
          <button className="mt-6 px-6 py-3 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition duration-300">
            Go Back Home
          </button>
        </Link>
        
        <div className="mt-10 text-gray-400 text-sm">
          Error Code: 404 | Lost in space 🚀
        </div>
      </div>

    </div>
  );
};

export default Notfound;
