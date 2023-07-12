import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
    title: string,
    leftIcon?: string | null,
    rightIcon?: string | null,
    handleClick?: MouseEventHandler,
    submitting?: boolean | false,
    type?: 'button' | 'submit',
    bgColor?: string,
    textColor?: string
}
function Button({ title, leftIcon, rightIcon, handleClick, submitting, type, bgColor, textColor }: Props) {
  return (
    <button
        type={type || 'button'}
        disabled={submitting || false}
        className={`gap-1 px-4 pr-6 items-center py-2 flex 
        ${textColor ? textColor : 'text-white'} 
        ${submitting ? 'bg-black/50' : bgColor ? bgColor : 'bg-violet-500'} rounded-md transition-all hover:scale-110 text-sm font-semibold max-md:w-full`}
        onClick={handleClick}
    >
        {leftIcon && <Image src={leftIcon} width={14} height={14} alt="left icon" />}
        <div className=" mt-1 text-lg font-bold">
        {!submitting ? title : title == 'Create' ? 'Creating...' : 'Editing...'}
        </div>
        {rightIcon && <Image src={rightIcon} width={14} height={14} alt="right icon" />}
    </button>
  )
}

export default Button