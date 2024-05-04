import { Divider, Typography } from "@mui/material";
import Card from "../../components/Miscellaneous/Card";
import useTextForCurrentLanguage from "../../hooks/useTextForCurrentLanguage";

import AngularIcon from "../../assets/icons/angular.png";
import CSSIcon from "../../assets/icons/css.png";
import DockerIcon from "../../assets/icons/docker.png";
import ExpressIcon from "../../assets/icons/express.png";
import GITIcon from "../../assets/icons/git.png";
import HTMLIcon from "../../assets/icons/html.png";
import JavaScriptIcon from "../../assets/icons/javascript.png";
import MongoDBIcon from "../../assets/icons/mongodb.png";
import MySQLIcon from "../../assets/icons/mysql.png";
import NodeJSIcon from "../../assets/icons/nodejs.png";
import PHPIcon from "../../assets/icons/php.png";
import ReactIcon from "../../assets/icons/react.png";
import TailwindIcon from "../../assets/icons/tailwind.png";
import TypeScriptIcon from "../../assets/icons/typescript.png";
import JestIcon from "../../assets/icons/jest.png";
import SuperTestIcon from "../../assets/icons/supertest.png";

type tLink = {
  title: string, 
  url: string, 
  image: string
}

const Toolbox = () => {
  const links: tLink[] = [
    { title: 'ReactJS', url: 'https://reactjs.org/', image: ReactIcon },
    { title: 'AngularJS', url: 'https://angularjs.org/', image: AngularIcon },
    { title: 'TailwindCSS', url: 'https://tailwindcss.com/', image: TailwindIcon },
    { title: 'JavaScript', url: 'https://www.javascript.com/', image: JavaScriptIcon },
    { title: 'TypeScript', url: 'https://www.typescriptlang.org/', image: TypeScriptIcon },
    { title: 'NodeJS', url: 'https://nodejs.org/', image: NodeJSIcon },
    { title: 'ExpressJS', url: 'https://expressjs.com/', image: ExpressIcon },
    { title: 'MongoDB', url: 'https://www.mongodb.com/de-de', image: MongoDBIcon },
    { title: 'MySQL', url: 'https://www.mysql.com/', image: MySQLIcon },
    { title: 'Docker', url: 'https://www.docker.com/', image: DockerIcon },
    { title: 'GIT', url: 'https://git-scm.com/', image: GITIcon },
    { title: 'PHP', url: 'https://www.php.net/', image: PHPIcon },
    { title: 'HTML5', url: 'https://html.spec.whatwg.org/multipage/', image: HTMLIcon },
    { title: 'CSS3', url: 'https://www.css3.com/', image: CSSIcon }
  ];

  const linksLearning: tLink[] = [
    { title: 'React Native', url: 'https://reactnative.dev/', image: ReactIcon },
    { title: 'Jest', url: 'https://jestjs.io/', image: JestIcon },
    { title: 'SuperTest', url: 'https://www.npmjs.com/package/supertest', image: SuperTestIcon }
  ];

  return (
    <div className="min-h-full w-full flex items-center justify-center p-1">
      <div className="w-[60%] max-lg:h-full max-lg:w-full max-lg:p-[10%]">
        <Card className="w-full">
          <div className="flex items-baseline gap-4 flex-wrap">
            <Typography 
              variant="h2" 
              fontWeight={200}
              children={ useTextForCurrentLanguage([
                { lang: 'en', text: 'My Toolbox 🧰' },
                { lang: 'de', text: 'Meine Toolbox 🧰' }
              ])}
            />
          </div>
          <Divider className="bg-white/75" />
          <div className="flex flex-col gap-8">
            <Typography 
              variant="body1"
              fontWeight={200}
              children={ useTextForCurrentLanguage([
                { lang: 'en', text: 'Concepts, programming languages, frameworks, and other tools I have worked with on smaller and larger projects.' },
                { lang: 'de', text: 'Konzepte, Programmiersprachen, Frameworks und weitere Tools, mit welchen ich bereits an kleineren und größeren Projekten gearbeitet habe.' }
              ])}
            />
            <div className="h-auto w-full flex justify-center gap-4 flex-wrap">
              { links.map((link: tLink, index: number) => (
                <div
                  key={index}
                  className="h-auto w-[90px] flex flex-col items-center gap-1 hover:scale-105 duration-200"
                >
                  <a
                      href={ link.url }
                      target="_blank"
                      children={(
                        <img
                          src= {link.image }
                          alt={`${link.title} - image`}
                          className="h-auto w-[50px] aspect-square"
                        />
                      )}
                    />
                    <Typography>{ link.title }</Typography>
                </div>
              ))}
            </div>
          </div>
          <Divider className="bg-white/75" />
          <div className="flex flex-col gap-8">
            <Typography 
              variant="body1"
              fontWeight={200}
              className="whitespace-pre-wrap"
              children={ useTextForCurrentLanguage([
                { lang: 'en', text: 'I\'m currently learning React Native to program native mobile apps.\nI\'m also currently learning Jest and Supertest so that I can test NodeJS applications automatically.' },
                { lang: 'de', text: 'Aktuell lerne ich React Native, um mobile, native Apps zu programmieren.\nAußerdem lerne ich derzeitig Jest und Supertest, um NodeJS Anwendungen automatisiert testen zu können.' }
              ])}
            />
            <div className="h-auto w-full flex justify-center gap-4 flex-wrap">
              { linksLearning.map((link: tLink, index: number) => (
                <div
                  key={index}
                  className="h-auto w-[90px] flex flex-col items-center gap-1 hover:scale-105 duration-200"
                >
                  <a
                      href={ link.url }
                      target="_blank"
                      children={(
                        <img
                          src= {link.image }
                          alt={`${link.title} - image`}
                          className="h-auto w-[50px] aspect-square"
                        />
                      )}
                    />
                    <Typography>{ link.title }</Typography>
                </div>
              ))}
            </div>
          </div>
          <Divider className="bg-white/75" />
          <div>
            <Typography 
              variant="body2"
              fontWeight={200}
              className="block"
              children={<>
                <i 
                  children={useTextForCurrentLanguage([
                    { lang: 'en', text: 'Learning never stops, and in a world characterized by constant technological progress, it is crucial to keep learning new technologies. Because only through continuous learning can we expand our skills, broaden our horizons and with the Keep up with current developments in order to remain successful.' },
                    { lang: 'de', text: '"Das Lernen hört nie auf, und in einer Welt, die von ständigem technologischem Fortschritt geprägt ist, ist es von entscheidener Bedeutung, immer wieder neue Technologien zu erlernen. Denn nur durch kontinuierliches Lernen können wir unsere Fähigkeiten erweitern, unseren Horizont erweitern und mit den aktuellen Entwicklungen Schritt halten, um erfolgreich zu bleiben."' }
                  ])}
                />
              </>}
            />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Toolbox;