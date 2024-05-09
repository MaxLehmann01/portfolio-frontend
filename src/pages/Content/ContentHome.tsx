import { Divider, Typography } from "@mui/material";
import GitHubIcon from "../../assets/icons/github.png";
import LinkedInIcon from "../../assets/icons/linkedin.png";
import XingIcon from "../../assets/icons/xing.png";
import TypeWriter from "../../components/Miscellaneous/TypeWriter";
import GrinWaveLaptop from "../../assets/bitmoji/grin-wave-laptop.png";
import useTextForCurrentLanguage from "../../hooks/useTextForCurrentLanguage";
import Card from "../../components/Miscellaneous/Card";
import ImageButton from "../../components/Miscellaneous/ImageButton";

const ContentHome = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-auto w-full max-lg:h-full max-lg:w-full max-lg:p-8 overflow-y-auto">
        <div className="flex items-center justify-center gap-[5%] max-lg:flex-col">
          <img 
            src={GrinWaveLaptop}
            alt="profilepicture"
            className="h-auto w-[350px] aspect-square duration-300"
          />
          <Card className="h-auto w-[600px] max-w-full">
            <div className="flex items-baseline gap-4 flex-wrap">
              <Typography 
                variant="h2" 
                fontWeight={200} 
              >
                {useTextForCurrentLanguage([
                  { lang: 'en', text: 'My name is' },
                  { lang: 'de', text: 'Mein Name ist' }
                ])}
                &nbsp;
                <span className="font-[300]">Max 👋</span>
              </Typography>
              <TypeWriter strings={[ 'node.js', 'React', 'TailwindCSS', 'Docker', 'express.js' ]} />
            </div>
            <Divider className="bg-white/75" />
            <div className="flex-1">
              <Typography
                variant="body1"
                fontWeight={200}
                children={useTextForCurrentLanguage([
                  { lang: 'en', text: 'Junior Software Developer from North Rhine-Westphalia, Germany, specializing in Fullstack Web Development. 🧑‍💻' },
                  { lang: 'de', text: 'Junior Softwareentwickler aus Nordrhein-Westfalen, Deutschland, mit einer Spezialisierung auf Fullstack-Webentwicklung. 🧑‍💻' }
                ])}
              />
            </div>
            <Divider className="bg-white/75" />
            <div className="flex gap-4">
              <ImageButton
                href="https://github.com/MaxLehmann01"
                image={GitHubIcon} 
                title="GitHub Profile"
              />
              <ImageButton
                href="https://www.linkedin.com/in/max-lehmann-3a476526a/"
                image={LinkedInIcon} 
                title="LinkedIn Profile"
              />
              <ImageButton
                href="https://www.xing.com/profile/Max_Lehmann086880/cv"
                image={XingIcon} 
                title="Xing Profile"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ContentHome