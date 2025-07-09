"use client";

import { SideBarContentData } from "@/config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";

const SidebarContent = ({
  setIsOpen,
}: {
  setIsOpen: (val: boolean) => void;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const selected = SideBarContentData.find((content) =>
    pathname.startsWith(content.href)
  )?.id;
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div className="w-full">
      {SideBarContentData.map((content) => (
        <div
          key={content.id}
          onClick={() => {
            if (isMobile) setIsOpen(false);
            router.push(`${content.href}`);
          }}
          className={cn(
            "w-[75%] py-2 px-1 flex items-center space-x-3 cursor-pointer pl-2 ml-3 ",
            selected === content.id
              ? "border !border-[#468168] rounded-2xl bg-[#E8F8F1]"
              : ""
          )}
        >
          <Image
            src={content.src}
            width={25}
            height={25}
            alt={content.id}
            className="text-[#468168] "
          />
          <span className="text-[#468168]">{content.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SidebarContent;
