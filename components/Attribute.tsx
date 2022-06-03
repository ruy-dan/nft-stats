interface Props {
  name: string,
  value: string,
  rarity: string
}

export default function Stat({ name, value, rarity }: Props) {
  return (
    <div className='rounded-xl mx-1 py-1 px-4 border-blue-400 border-2'>
      <div className='text-xs text-blue-400'>{name}</div>
      <div className='flex'>
      <div className='flex-auto text-blue-400 font-bold text-xs'>{value}</div>
      <div className='flex-auto text-blue-400 text-xs text-right'>{rarity}</div>
      </div>
    </div>
  )
}
