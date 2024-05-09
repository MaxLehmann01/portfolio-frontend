import { Typography, Divider, Tooltip } from "@mui/material";
import useTextForCurrentLanguage from "../../hooks/useTextForCurrentLanguage";
import Card from "../../components/Miscellaneous/Card";
import FlagDE from "../../assets/flags/flag-de.png";
import FlagUK from "../../assets/flags/flag-uk.png";

const ContentAbout = () => {
  return (
    <div className="min-h-full w-full flex items-center justify-center p-1">
      <div className="w-[60%] max-lg:h-full max-lg:w-full max-lg:p-[10%]">
        <Card className="w-full">
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
          <div className="flex flex-col gap-8">
            <Typography 
              variant="body1"
              fontWeight={200}
              className="whitespace-pre-wrap"
              children={ useTextForCurrentLanguage([
                { lang: 'en', text: 'My interest in computers began quite early in my youth.\nAnd although my budding passion was mainly limited to playing computer games, I noticed that the logical and technical aspects in games interested me the most.\n\nTowards the end of my time in comprehensive school, my interest in computers and how they work grew, which is why I decided to continue my academic career as a computer scientist and obtained the qualification as an Information Technology Assistant in the summer of 2020.\n\nDuring my time at vocational college, I gained insights into various areas of computer science, and it became clear to me that my strength lies in software development, specifically web development.\n\nI was thrilled by the immediate feedback of web development and knew immediately that I wanted to continue my professional future in this field.\nTherefore, after my time at vocational college, I started an apprenticeship as a computer scientist specializing in application development.\n\nDuring my apprenticeship, I gained a lot of experience in the professional world and learned not only about various technologies but also about project management and teamwork.\n\nI completed my training in the spring of 2023 and achieved a total score of 81 in the exams.\n\nAfter my training, I was taken on by my training company and worked on various internal applications from then on.' },
                { lang: 'de', text: 'Mein Interesse für Computer begann schon recht früh in meiner Jugend.\nUnd obwohl sich meine angehende Leidenschaft eher auf das Spielen von Computerspielen beschränkte, merkte ich, dass mich die logischen und technischen Aspekte in Spielen immer am meisten interessierten.\n\nGegen Ende meiner Zeit an der Gesamtschule wurde mein Interesse an Computern und wie sie überhaupt funktionieren, immer größer, weshalb ich mich entschied, meine schulische Laufbahn als Fachinformatiker fortzuführen und im Sommer 2020 den Abschluss zum Informationstechnischen Assistenten erzielte.\n\nWährend meiner Zeit am Berufskolleg bekam ich Einblicke in verschiedenste Bereiche der Informatik, und mir wurde klar, dass meine Stärke in der Softwareentwicklung, speziell der Webentwicklung, liegt.\n\nIch war von dem direkten Feedback der Webentwicklung begeistert und wusste sofort, dass ich meine berufliche Zukunft in diesem Feld fortsetzen möchte.\nDeshalb begann ich nach meiner Zeit am Berufskolleg eine Berufsausbildung zum Fachinformatiker im Bereich Anwendungsentwicklung.\n\nWährend meiner Ausbildungszeit konnte ich eine Menge Erfahrungen in der Berufswelt sammeln und lernte neben verschiedensten Technologien auch einiges über Projektmanagement und das Arbeiten im Team.\n\nMeine Ausbildung schloss ich im Frühling 2023 ab und erzielte in den Prüfungen eine Gesamtpunktzahl von 81.\n\nNach meiner Ausbildung wurde ich von meinem Ausbildungsbetrieb übernommen und arbeitete fortan an verschiedenen internen Anwendungen.' }
              ])}
            />
          </div>
          <Divider className="bg-white/75" />
          <div className="flex items-baseline gap-4 flex-wrap">
            <Typography 
              variant="h2" 
              fontWeight={200}
              children={ useTextForCurrentLanguage([
                { lang: 'en', text: 'Languages' },
                { lang: 'de', text: 'Sprachen' }
              ])}
            />
          </div>
          <div className="flex gap-4 max-lg:flex-col">
            <Card className="flex-1 flex flex-col items-center gap-1 ring-0 bg-[#1e1e1e]/10">
              <Tooltip 
                title={useTextForCurrentLanguage([
                  { lang: 'en', text: 'German' }, 
                  { lang: 'de', text: 'Deutsch' }
                ])}
              >
                <img
                  src={FlagDE}
                  alt="Germany Flag"
                  className="h-auto w-[40px] aspect-square rounded-full hover:scale-105 duration-200"
                />
              </Tooltip>
              <Typography
                variant="body2"
                children={useTextForCurrentLanguage([
                  { lang: 'en', text: 'Mother Tongue' }, 
                  { lang: 'de', text: 'Muttersprache' }
                ])}
              />
            </Card>
            <Card className="flex-1 flex flex-col items-center gap-1 ring-0 bg-[#1e1e1e]/10">
              <Tooltip 
                title={useTextForCurrentLanguage([
                  { lang: 'en', text: 'English' }, 
                  { lang: 'de', text: 'Englisch' }
                ])}
              >
                <img
                  src={FlagUK}
                  alt="United Kingdom Flag"
                  className="h-auto w-[40px] aspect-square rounded-full hover:scale-105 duration-200"
                />
              </Tooltip>
              <Typography
                variant="body2"
                children={useTextForCurrentLanguage([
                  { lang: 'en', text: 'Basic knowledge' }, 
                  { lang: 'de', text: 'Grundkenntnisse' }
                ])}
              />
            </Card>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ContentAbout;