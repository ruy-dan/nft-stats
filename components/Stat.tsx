interface Props {
  name: string,
  description: string
}

export default function Stat({ name, description }: Props) {
  return (
    <div className='group rounded-xl bg-[#0D0D0D] py-4 px-6 shadow-md h-full w-full hover:cursor-pointer'>
      <p className='font-bold text-sm text-green-400'>{name}</p>
      <p className='my-2 text-xs'>{description}.</p>
      <div className='my-2 flex self-end text-right font-bold md:pt-0 md:text-base'></div>
    </div>
  )
}
