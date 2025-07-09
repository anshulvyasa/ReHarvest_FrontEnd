import { sidebarFooterContent } from "@/config";
import Image from "next/image";

const SidebarFooter = () => {
  return (
    <footer className="w-full">
      {sidebarFooterContent.map((content) => (
        <div className="py-2 px-1 flex items-center space-x-3 cursor-pointer pl-2 ml-3" key={content.id}>
          <Image src={content.src} height={25} width={25} alt={content.id} />
          <span className="text-[#468168]">{content.title}</span>
        </div>
      ))}
    </footer>
  );
};

export default SidebarFooter;
