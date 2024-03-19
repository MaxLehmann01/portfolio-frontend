import { Divider, Typography } from "@mui/material";
import useTextForCurrentLanguage from "../../hooks/useTextForCurrentLanguage";

const Toolbox = () => {
  return (
    <div className="h-full w-full flex items-center justify-center gap-[10%] max-lg:flex-col">
      <div className="h-auto w-2/3 max-lg:w-full flex flex-col gap-4 p-4 bg-[#212224]/30 backdrop-blur-sm shadow-2xl rounded-[10px] ring-1 duration-200 ring-black/5 hover:ring-blue-800/30">
        <div className="flex items-baseline gap-4 flex-wrap">
          <Typography 
            variant="h2" 
            fontWeight={200}
            children={ useTextForCurrentLanguage([
              { lang: 'de', text: 'Meine Toolbox 🧰' },
              { lang: 'en', text: 'My Toolbox 🧰' }
            ])}
          />
        </div>
        <Divider className="bg-white/75" />
        <div className="flex-1">
          <Typography 
            variant="body1"
            fontWeight={200}
            children={ useTextForCurrentLanguage([
              { lang: 'de', text: 'Konzepte, Programmiersprachen, Frameworks und weitere Tools, mit welchen ich bereits an kleineren und größeren Projekten gearbeitet habe.' },
              { lang: 'en', text: 'Concepts, programming languages, frameworks, and other tools I have worked with on smaller and larger projects.' }
            ])}
          />
          Tools | Frontend | Backend | Concepts
        </div>
      </div>
    </div>
  )
}

export default Toolbox;