type tCardProps = {
  className?: string;
  children?: React.ReactNode;
}

const Card = ({ className, children }: tCardProps) => {
  return (
    <div 
      className={`flex flex-col gap-4 p-4 bg-[#212224]/30 backdrop-blur-sm shadow-2xl rounded-[10px] ring-1 duration-200 ring-black/5 hover:ring-blue-800/30 ${className}`}
      children={children}
    />
  )
}

export default Card;