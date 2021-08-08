import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function InfoCard({img, title, description, location, star, price, total}) {
    return (
        <div className="flex py-7 px-2 pr-4 cursor-pointer border-b 
            hover:opacity-80 hover:shadow-lg transition duration-200 
            ease-out first:border-t">

        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image 
                className="rounded-xl"
                src={img}
                layout="fill"
                objectFit="cover"
            />
        </div>
            <div className="flex flex-col flex-grow pl-5 mb-10">
                <div className="flex justify-between">
                    <p className="text-xs text-gray-500">{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h2 className="text-xl">{title}</h2>
                <div className="border-b w-10 pt-2"/>
                <p className="text-xs pt-2 flex-grow text-gray-500">{description}</p>
                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p> 
                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                        <p className="text-xs text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
