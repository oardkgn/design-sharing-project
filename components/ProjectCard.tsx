'use client'
import { type } from "os";
import {useState , useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  image: string;
  title: string;
  name: string;
  avatarUrl: string;
  userId: string;
};

function ProjectCard({
  id,
  image,
  title,
  name,
  avatarUrl,
  userId,
}: Props) {

    const [randomLikes, setRandomLikes] = useState(0);
    const [randomViews, setRandomViews] = useState('');

    useEffect(() => {
        setRandomLikes(Math.floor(Math.random() * 10000))
        setRandomViews(String((Math.floor(Math.random() * 10000) / 1000).toFixed(1) + 'k'))
    }, []);


  return (
    <div className="rounded-2xl shadow-xl p-2">
      <Link className=" group relative" href={`/project/${id}`}>
        <Image
          src={image}
          alt="title"
          className="  object-cover
        rounded-lg"
          width={414}
          height={314}
        />
        <div className=" rounded-b-lg opacity-0 group-hover:opacity-100 transition-all absolute bottom-[0px] left-[0px] bg-gradient-to-t from-black/60 to-transparent py-3 pb-2 text-white pl-2 w-full text-md font-normal">
          <div>
            <p>{title}</p>
          </div>
        </div>
      </Link>
      <div className="mt-1 px-1 flex justify-between items-center">
        <Link
          className=" group flex items-center gap-1 mt-2"
          href={`/profile/${userId}`}
        >
          <Image
            src={avatarUrl}
            alt={name}
            width={26}
            height={26}
            className=" group-hover:scale-110 transition-all rounded-full "
          />
          <span className=" text-sm font-semibold">{name}</span>
        </Link>

        <div className="mt-1 flex gap-2">
          <div className=" flex gap-1">
            <Image src="/hearth.svg" className="" width={10} height={10} alt="likes" />
            <span className=" font-bold text-sm">{randomLikes}</span>
          </div>
          <div className=" flex gap-1">
            <Image src="/eye.svg" width={10} height={10} alt="likes" />
            <span className=" font-bold text-sm">{randomViews}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
