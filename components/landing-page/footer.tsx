import { navbarLink } from "@/config";
import { Leaf } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#468168] py-12 text-white">
      <div className="container-max text-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-left">
          {/* Left Section: Logo, Description, Navigation, and Certification */}
          <div className="mb-8 md:mb-0 md:w-1/2">
            <div className="flex items-center mb-4">
              <Leaf className="h-9 w-9 mr-2 text-white" />
              <span className="text-[36px] font-[700] pb-1">ReHarvest</span>
            </div>
            <p className="mb-6 text-lg max-w-md">
              Building a sustainable future through AI-powered supply chain
              optimization and circular economy solutions.
            </p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-lg">
              {navbarLink.map((content, index) => (
                <Link key={index} href={content.href} className="hover:underline ">
                  {content.title}
                </Link>
              ))}
            </nav>
            <div className="flex items-center text-sm px-5 py-3 bg-[#B6C3B230] border !border-[#BCBCBC] rounded-full w-fit">
              <span className="h-2 w-2 bg-green-200 rounded-full mr-2"></span>
              carbon Neutral Certified
            </div>
          </div>

          {/* Right Section: Connect with us, Social Icons, Contact Info */}
          <div className="md:w-1/2 md:text-right">
            <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
            <div className="flex justify-start md:justify-end space-x-4 mb-6">
              {/* Social Media Icons - Replace href with actual links */}
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 border border-white rounded-full hover:bg-white hover:text-[#468168] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-17 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.4 3 4l-1 1c1.8 1.3 3.6 2 6 2 3 0 5-2 6-3 1.2-1.2 1.5-3 2-4h2z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 border border-white rounded-full hover:bg-white hover:text-[#468168] transition-colors"
              >
                {/* Assuming LinkedIn icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="p-2 border border-white rounded-full hover:bg-white hover:text-[#468168] transition-colors"
              >
                {/* Assuming GitHub icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.5 0 4.1-2.2 4.1-3.6 0-3.6-2.5-4-3.5-4A4.8 4.8 0 0 0 12 5.5V4l-2 2-2-2v1.5c-1 0-3 1-3 4s.6 2.6 4.1 3.6c-1 .8-1.5 2.2-1.5 3.2v4c-1.5 0-3-.5-4-1.5s-1-3-1-4.5c0-3.5 2.5-6 6-6s6 2.5 6 6c0 1.5-.5 3-1.5 4.5s-2.5 1.5-4 1.5zM12 2C6.5 2 2 6.5 2 12c0 4.4 2.8 8.1 6.7 9.4.5.1.7-.2.7-.4v-2c-2.7.6-3.2-1.2-3.2-1.2-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.8.4-1.1.6-1.4C10.5 15.5 8 13 8 9.5c0-2.5 1.7-4.5 4-5.5.5-.1 1-.2 1.5-.2h.5c.5 0 1 .1 1.5.2 2.3 1 4 3 4 5.5 0 3.5-2.5 6-4.5 7.5-.2.2-.5.5-.5.9V22z" />
                </svg>
              </a>
              <a
                href="mailto:hello@reharvest.ai"
                aria-label="Email"
                className="p-2 border border-white rounded-full hover:bg-white hover:text-[#468168] transition-colors"
              >
                {/* Assuming Mail icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
            <p className="text-lg mb-2">hello@reharvest.ai</p>
            <p className="text-lg">1-562-246-245</p>
          </div>
        </div>

        <hr className="border-t border-white border-opacity-30 my-8" />

        {/* Bottom Section: Copyright */}
        <div className="text-center text-sm">
          <p>
            &copy; 2025 ReHarvest. All rights reserved. Building a more
            sustainable tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
