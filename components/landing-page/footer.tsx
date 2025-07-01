import { Recycle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-secondary border-t border-border-primary py-12">
      <div className="container-max text-center mx-auto">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Recycle className="h-6 w-6 text-primary-400" />
          <span className="text-xl font-bold">ReHarvest</span>
        </div>
        <p className="text-text-muted">
          © 2024 ReHarvest. Building a sustainable future, one item at a time.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
