interface Props {
  address: string
}

export default function Owner({ address }: Props) {
  return (
    <div className='group rounded-xl bg-[#0D0D0D] py-4 px-6 shadow-md h-full w-full'>
      <h5 className='font-bold group-hover:text-red-400'>Owned by</h5>
      <p className='my-2 text-sm text-gray-400'>{address}</p>
      <div className='my-2 flex self-end text-right font-bold md:pt-0 md:text-base'></div>
    </div>
  )
}
