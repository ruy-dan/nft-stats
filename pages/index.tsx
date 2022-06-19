import SiteHeading from '../components/SiteHeading'
import Portrait from '../components/Portrait'
import Collection from '../components/Collection'
import Stat from '../components/Stat'
import Owner from '../components/Owner'
import Pricing from '../components/Pricing'
import Attributes from '../components/Attributes'

export default function HomePage() {
  const attributes = [
    {key: '01', name:'background', value: 'purple', rarity: '9%'},
    {key: '02', name:'eyewear', value: 'glasses', rarity: '7%'}
  ]
  return (
    <div className='m-auto pl-4 flex max-w-4xl flex-col items-stretch gap-8 pt-24'>
      <SiteHeading>nft-stats</SiteHeading>
      <div className='p-8'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-3'>
          <div className='md:col-span-2 md:row-span-3 lg:col-span-2 lg:row-span-3'>
            <Portrait url='https://bafybeib6xilv34hxps4foewwkd3fripgnc4jitzul54uvflzmtmagm6rgu.ipfs.dweb.link/5830.png?ext=png' />
          </div>
          <div className='lg:col-span-4'>
            <Collection title='Okay Bear #5831' subtitle='Okay Bears' />
          </div>

          <div className='lg:col-span-2'>
            <Owner address='3dAyud...DWNL'/>
          </div>

          <div className='lg:col-span-2 lg:row-span-4'>
            <Pricing title=''></Pricing>
          </div>
          <div className='lg:col-span-2 lg:row-span-3'>
            <Attributes attributes={attributes} />
          </div>
          <div className='lg:col-span-2 lg:row-span-2 md:col-span-4'>
            <Stat name='Underpriced' description='This NFT has been listed under floor price'/>
          </div>
        </div>
      </div>
    </div>
  )
}
