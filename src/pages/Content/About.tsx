import { Typography, Divider } from "@mui/material";
import useTextForCurrentLanguage from "../../hooks/useTextForCurrentLanguage";
import Card from "../../components/Miscellaneous/Card";

const About = () => {
  return (
    <div className="h-full w-full flex items-center justify-center gap-[10%] max-lg:flex-col">
      <Card className="h-auto w-2/3 max-lg:w-full">
        <div className="flex items-baseline gap-4 flex-wrap">
          <Typography 
            variant="h2" 
            fontWeight={200}
            children={ useTextForCurrentLanguage([
              { lang: 'en', text: 'About me 🧑' },
              { lang: 'de', text: 'Über mich 🧑' }
            ])}
          />
        </div>
        <Divider className="bg-white/75" />
      </Card>
    </div>
  )
}

export default About;