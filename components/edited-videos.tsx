import Youtube from "react-youtube";
import { Separator } from "./ui/separator";

export const EditedVideos = () => {
  const videoOption = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
    height: "270",
    width: "480",
    className: "rounded-xl",
  };

  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">
        Videos I've edited
      </h1>
      <div className="flex  items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>

      <div className="flex justify-center">
        <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5 ">
          <Youtube opts={videoOption} videoId="ZjgjY3i9CTU" />
          <Youtube opts={videoOption} videoId="HYYbDo0t_To" />
          <Youtube opts={videoOption} videoId="GNe92krC_Wc" />
          <Youtube opts={videoOption} videoId="iII4yF3ox1c" />
        </div>
      </div>
    </div>
  );
};
