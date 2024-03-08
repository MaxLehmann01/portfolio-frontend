import { Divider, Typography } from "@mui/material";
import Photo from "../../assets/photo.jpg";
import GitHubLogo from "../../assets/github.png"
import LinkedInLogo from "../../assets/linkedin.png"
import XingLogo from "../../assets/xing.png"

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col gap-20 py-8 px-[10%]">
      <div className="h-[250px] w-full flex gap-20">
        <div className="h-auto w-full flex-1 flex flex-col p-4 gap-4 bg-[#212224]/30 backdrop-blur-sm shadow-lg rounded-lg ring-1 duration-200 ring-black/5 hover:ring-blue-800/30">
          <Typography variant="h2" fontWeight={200}>Ich bin <span className="font-medium">Max</span>👋</Typography>
          <Divider className="bg-[#505050]" />
          <div className="flex-1"></div>
          <Divider className="bg-[#505050]" />
          <div className="h-[32px] flex gap-4">
            <a 
              href="https://github.com/MaxLehmann01"
              target="_blank"
            >
              <img
                src={GitHubLogo}
                className="h-full aspect-square rounded-full duration-200 hover:scale-110"
              />
            </a>
          </div>
        </div>
        <img 
          src={Photo}
          className="h-full w-auto aspect-square object-cover object-[50%,30%] rounded-full ring-1 duration-200 ring-black/5 hover:ring-blue-800/30"
        />
      </div>
      <div className="h-auto w-full flex-1 flex flex-col p-4 gap-4 bg-[#212224]/30 backdrop-blur-sm shadow-lg rounded-lg ring-1 duration-200 ring-black/5 hover:ring-blue-800/30">

      </div>
    </div>
  )
}

export default Home