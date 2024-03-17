import { Divider, Typography } from "@mui/material";
import GitHubLogo from "../../assets/icons/github.png";
import LinkedInLogo from "../../assets/icons/linkedin.png";
import XingLogo from "../../assets/icons/xing.png";
import TypeWriter from "../../components/Miscellaneous/TypeWriter";
import GrinWaveLaptop from "../../assets/bitmoji/grin-wave-laptop.png";
import useTextForCurrentLanguage from "../../hooks/useTextForCurrentLanguage";

const Home = () => {
  // const { language } = useLocalStorage();

  return (
    <div className="h-full w-full flex items-center justify-center gap-[10%] max-lg:flex-col">
      <img 
        src={GrinWaveLaptop}
        alt="profilepicture"
        className="h-auto w-[350px] aspect-square duration-300"
      />
      <div className="h-auto w-[600px] max-w-full flex flex-col gap-4 p-4 bg-[#212224]/30 backdrop-blur-sm shadow-2xl rounded-[10px] ring-1 duration-200 ring-black/5 hover:ring-blue-800/30">
        <div className="flex items-baseline gap-4">
          <Typography 
            variant="h2" 
            fontWeight={300}
          >
            Hi! 👋
          </Typography>
          <TypeWriter strings={[ 'node.js', 'React', 'TailwindCSS', 'Docker', 'express.js' ]} />
        </div>
        <Divider className="bg-white/75" />
        <div className="flex-1">
          {/* <Typography>{ language === 'de' ? "Junior Softwareentwickler mit Schwerpunkt in Fullstack Webentwicklung. 👨🏻‍💻" : "Junior Softwareengineer with main focus in fullstack web-development." }</Typography> */}
          <Typography
            children={useTextForCurrentLanguage([
              { lang: 'de', text: 'hallo' },
              { lang: 'en', text: 'hello' }
            ])}
          />
        </div>
        <Divider className="bg-white/75" />
        <div className="flex gap-4">
          <a 
            href="https://github.com/MaxLehmann01"
            target="_blank"
            className="drop-shadow-xl"
          >
            <img 
              src={GitHubLogo} 
              alt="GitHub Profile"
              className="h-auto w-[40px] aspect-square rounded-full duration-200 hover:scale-110"
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/max-lehmann-3a476526a/"
            target="_blank"
            className="drop-shadow-xl"
          >
            <img 
              src={LinkedInLogo} 
              alt="GitHub Profile"
              className="h-auto w-[40px] aspect-square rounded-full duration-200 hover:scale-110"
            />
          </a>
          <a 
            href="https://www.xing.com/profile/Max_Lehmann086880/cv"
            target="_blank"
            className="drop-shadow-xl"
          >
            <img 
              src={XingLogo} 
              alt="GitHub Profile"
              className="h-auto w-[40px] aspect-square rounded-full duration-200 hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home