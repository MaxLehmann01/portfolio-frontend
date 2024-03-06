import { Code, EmojiPeople, Forum, School } from "@mui/icons-material";
import NavigationButton from "../Navigation/NavigationButton";
import NavigationLanguage from "../Navigation/NavigationLanguage";

const LayoutHeader = () => {
  return (
    <div className="h-auto w-full flex py-2 px-4 gap-4">
      <NavigationButton
        title={<>&lt;maxlehmann.dev <span className="text-[12px]">/</span>&gt;</>}
        destination="/"
      />
      <div className="flex-1 flex justify-end items-center gap-8">
        <NavigationButton
          title="Projects"
          destination="/projects"
          icon={Code}
        />
        <NavigationButton
          title="Toolbox"
          destination="/toolbox"
          icon={School}
        />
        <NavigationButton
          title="About"
          destination="/about"
          icon={EmojiPeople}
        />
        <NavigationButton
          title="Contact"
          destination="/contact"
          icon={Forum}
        />
      </div>
      <NavigationLanguage />
    </div>
  )
}

export default LayoutHeader;