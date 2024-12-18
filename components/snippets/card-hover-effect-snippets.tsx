import { HoverEffect } from "@/components/Ui/card-hover-effect";
import { PiMonitor } from "react-icons/pi";
import { PiStrategyBold } from "react-icons/pi";
import { PiMegaphoneBold } from "react-icons/pi";
import { PiParagraphBold } from "react-icons/pi";
import { TbSettingsPin } from "react-icons/tb";
import { PiProjectorScreenChartBold } from "react-icons/pi";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  { 
    icon: <div className="bg-blue-100 p-4 rounded-full">< PiMegaphoneBold className="w-8 h-8 text-blue-600"/></div>,
    title: "Social Media Marketing",
    description:`Social media marketing is our specialty. At our marketing agency, 
    we offer a complete range of services designed to help your brand stand out online. `
      ,
   
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full">< TbSettingsPin  className="w-8 h-8 text-blue-600"/></div>,
    title: "Social Media Management",
    description:`Our social media management services are perfect for growing
     your brand’s social community and engage with the right audience.
     We manage everything from curation of content to management of comments and everything in between. ` ,
   
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiProjectorScreenChartBold className="w-8 h-8 text-blue-600"/></div>,
    title: "Content Creation",
    description: `Keep up with the demand for more content from your brand;
     from custom grraphics to compeling videos,
     every peice is designed to drive engagement and amplify your marketing impact
    `,
    
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiParagraphBold className="w-8 h-8 text-blue-600"/></div>,
    title: "Graphic Design",
    description:`Graphic design is halfcreative and halfexecution. Work with ateam that will impressyou with both.
Graphic design is halfcreative and halfexecution. Work with ateam that will impress you with both.`,
    
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600"/></div>,
    title: "Web development and Management",
    description:`Our web design and development services include everything
     from graphic design to UX. Our staff of designers and developers are 
    skilled in virtually every programming language your project may require.  `,
    
  },

  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiStrategyBold className="w-8 h-8 text-blue-600"/></div>,
    title: "Brand Strategy",
    description:`With the aid of our customized brand strategy.Transform your content and brand voice optimized for 
    audience engagement and cross-channel brand alignment. `,
    
  },
  
];
