import { Tooltip } from "@mui/material";

type tImageButton = {
  href: string,
  image: string,
  title: string,
  className?: string,
  tooltip?: boolean
}

const ImageButton = ({ href, image, title, className, tooltip }: tImageButton) => {

  if(tooltip) {
    return (
      <Tooltip title={title}>
        <a 
          href={href}
          target="_blank"
          className="drop-shadow-xl"
          >
          <img 
            src={image} 
            alt={title}
            className={`h-auto w-[40px] aspect-square rounded-full duration-200 hover:scale-110 ${className}`}
          />
        </a>
      </Tooltip>
    )
  }

  return (
      <a 
        href={href}
        target="_blank"
        className="drop-shadow-xl"
        >
        <img 
          src={image} 
          alt={title}
          className={`h-auto w-[40px] aspect-square rounded-full duration-200 hover:scale-110 ${className}`}
        />
      </a>
  )

}

export default ImageButton;