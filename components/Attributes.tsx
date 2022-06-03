import Attribute from '../components/Attribute'

interface Props {
  attributes: Array<{ key: string; name: string; value: string, rarity:string }>
}

export default function Attributes({ attributes }: Props) {
  return (
    <div className="group h-full w-full rounded-xl bg-[#0D0D0D] py-4 px-6 shadow-md">
      <h5 className="font-bold group-hover:text-red-400">Attributes</h5>
      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        {attributes.map((attribute) => {
          return (
            <div key={attribute.key} className="flex-auto my-1">
              <Attribute
                name={attribute.name}
                value={attribute.value}
                rarity={attribute.rarity}
              />
            </div>
          )
        })}
      </div>
      <div className="my-2 flex self-end text-right font-bold md:pt-0 md:text-base"></div>
    </div>
  )
}
