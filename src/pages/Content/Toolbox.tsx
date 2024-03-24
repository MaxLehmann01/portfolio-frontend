import { Divider, Typography } from "@mui/material";
import Card from "../../components/Miscellaneous/Card";
import useTextForCurrentLanguage from "../../hooks/useTextForCurrentLanguage";

const Toolbox = () => {
  const links: { title: string, url: string, image: string }[] = [
    { title: 'ReactJS', url: 'https://reactjs.org/', image: '/src/assets/icons/react.png' },
    { title: 'AngularJS', url: 'https://angularjs.org/', image: '/src/assets/icons/angular.png' },
    { title: 'JavaScript', url: 'https://www.javascript.com/', image: '/src/assets/icons/javascript.png' },
    { title: 'TypeScript', url: 'https://www.typescriptlang.org/', image: '/src/assets/icons/typescript.png' },
    { title: 'PHP', url: 'https://www.php.net/', image: '/src/assets/icons/php.png' },
    { title: 'GIT', url: 'https://git-scm.com/', image: '/src/assets/icons/git.png' },
    { title: 'MySQL', url: 'https://www.mysql.com/', image: '/src/assets/icons/mysql.png' },
    { title: 'MongoDB', url: 'https://www.mongodb.com/de-de', image: '/src/assets/icons/mongodb.png' },
    { title: 'Docker', url: 'https://www.docker.com/', image: '/src/assets/icons/docker.png' },
    { title: 'NodeJS', url: 'https://nodejs.org/', image: '/src/assets/icons/nodejs.png' },
    { title: 'ExpressJS', url: 'https://expressjs.com/', image: '/src/assets/icons/express.png' },
    { title: 'HTML5', url: 'https://html.spec.whatwg.org/multipage/', image: '/src/assets/icons/html.png' },
    { title: 'CSS3', url: 'https://www.css3.com/', image: '/src/assets/icons/css.png' },
    { title: 'TailwindCSS', url: 'https://tailwindcss.com/', image: '/src/assets/icons/tailwind.png' }
  ];

  return (
    <div className="h-full w-full flex items-center justify-center gap-[10%] max-lg:flex-col">
      <Card className="h-auto w-2/3 max-lg:w-full">
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
            { links.map((link, index) => (
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
                  { lang: 'en', text: '' },
                  { lang: 'de', text: '"Das Lernen hört nie auf, und in einer Welt, die von ständigem technologischem Fortschritt geprägt ist, ist es von entscheidener Bedeutung, immer wieder neue Technologien zu erlernen. Denn nur durch kontinuierliches Lernen können wir unsere Fähigkeiten erweitern, unseren Horizont erweitern und mit den aktuellen Entwicklungen Schritt halten, um erfolgreich zu bleiben."' }
                ])}
              /> - <span className="font-medium">ChatGPT 😜</span>
            </>}
          />
        </div>
      </Card>
    </div>
  )
}

export default Toolbox;