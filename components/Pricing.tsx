import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


interface Props {
  title: string
}

export default function Pricing({ title }: Props) {
  const data = [
    {
      name: 'A',
      sol: 400
    },
    {
      name: 'B',
      sol: 300
    },
    {
      name: 'C',
      sol: 200
    },
    {
      name: 'D',
      sol: 278
    },
    {
      name: 'E',
      sol: 109
    },
    {
      name: 'F',
      sol: 239
    },
    {
      name: 'G',
      sol: 349
    },
  ];

  return (
    <div className='group h-full w-full rounded-xl bg-[#0D0D0D] py-4 px-6 shadow-md'>
      <h5 className='font-bold group-hover:text-red-400'>Pricing history</h5>
      <p className='text-blue-400 text-xs'>Last Price</p>
      <p className='text-blue-400 text-base font-bold'>◎ 166 SOL</p>
      <p className='text-white text-base font-bold'>$ 6,474.35</p>
      <ResponsiveContainer width='100%' aspect={4.0/3.0}>
      <LineChart
          width={200}
          height={300}
          data={data}
          margin={{
            top: 5,
            right:0,
            left: 0,
            bottom: 5,
          }}
        >
          <Line type='monotone' dataKey='sol' stroke='#60a5fa' strokeWidth={2} dot={false}/>
        </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
