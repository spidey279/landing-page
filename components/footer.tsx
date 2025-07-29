import Link from "next/link";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  const links = [
    {
      link: "https://x.com/yashtwt69",
      icon: <XIcon fontSize="large" />,
    },
    {
      link: "https://github.com/spidey279",
      icon: <GitHubIcon fontSize="large" />,
    },
    {
      link: "https://www.linkedin.com/in/yash-b8b67433b/",
      icon: <LinkedInIcon fontSize="large" />,
    },
  ];

  return (
    <div className="text-center mt-20">
      <div className="flex justify-center items-center space-x-4">
        {links.map((link, index) => (
          <div key={index} className="">
            <Link target="_blank" href={link.link}>
              {link.icon}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
