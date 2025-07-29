import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import {Avatar} from "@mui/material"

export const Channels = () => {
  const channels = [
    {
      logo: "/ironman.jpg",
      name: "Tony Stark",
      subs: "1000,000",
      link: "https://www.youtube.com/@dhruvrathee",
    },
    {
      logo: "/venom.jpg",
      name: "Eddie Brock",
      subs: "500,000",
      link: "https://www.youtube.com/@ThePrimeTimeagen",
    },
    {
      logo: "/spidey.jpg",
      name: "Peter Parker",
      subs: "900,000",
      link: "https://www.youtube.com/@psychoprashil",
    },
    {
      logo: "/thanos.jpg",
      name: "Baldhead",
      subs: "200,000",
      link: "https://www.youtube.com/@NizzyABI",
    },
  ];


  const style =  {
    width: {
        xs:50,
        sm:100,
        md:150,
    },
    height: {
        xs:50,
        sm:100,
        md:150,
    },
  }

  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl">
        Channels I've Worked With
      </h1>
      <div className="flex  items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>
      <div className="flex items-center justify-center mx-auto sm:space-x-4 lg:space-x-8 ">
        {channels.map((channel,index)=>(
            <div key={index} className="mt-10 flex ">
                <div className="flex flex-col items-center ">
                    <Link href={channel.link}>
                    <Avatar sx={style} src={channel.logo} alt={channel.name} />
                    </Link>
                    <h1 className="font-semibold text-xl mt-4 ">{channel.name}</h1>
                    <p className="text-lg mt-2">{channel.subs}</p>

                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
