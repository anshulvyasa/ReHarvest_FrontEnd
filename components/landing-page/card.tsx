import { cn } from "@/lib/utils";

interface Props {
  cardbg: string;
  iconbg: string;
  textCole: string;
  heading: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const LandingPageCard = ({
  cardbg,
  iconbg,
  textCole,
  heading,
  description,
  Icon,
}: Props) => {
  return (
    <div className={cn("p-6 ", cardbg)}>
      <div className="flex items-center space-x-4">
        <div className={cn("flex-shrink-0", iconbg)}>
          <Icon className={cn("h-6 w-6", textCole)} />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-text-primary mb-2">
            {heading}
          </h4>
          <p className="text-text-secondary">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPageCard;
