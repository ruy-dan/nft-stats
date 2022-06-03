interface Props {
  title: string,
  subtitle: string
}

export default function Stat({ title, subtitle }: Props) {
  return (
    <div className='group rounded-xl bg-[#0D0D0D] py-4 px-6 shadow-md h-full w-full hover:cursor-pointer'>
      <h2 className='text-xl font-bold md:text-3xl group-hover:text-red-400'>{title}</h2>
      <h5 className='my-2 text-sm md:text-base'>{subtitle}</h5>
      <div className='my-2 flex self-end text-right font-bold md:pt-0 md:text-base'></div>
    </div>
  )
}
