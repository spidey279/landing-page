import { Separator } from "./ui/separator";
import {InlineWidget} from "react-calendly"


export const Calendly = () => {
  return (
    <div className="text-center" id="calendly">
        <h1 className="pb-4 font-bold tracking-tight text-4xl lg:text-5xl">Ready to Transform Your Content? <br/>
        Book a Free Editing Consultation Below!</h1>
      <div className="flex  items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div> 
      <InlineWidget url="#2" styles={{height:'800px',borderRadius:"5px"}}/>
    </div>
  );
};
