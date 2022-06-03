interface Props {
  url: string
}

export default function Portrait({ url }: Props) {
  return (
    <div id="portrait" className="rounded-xl bg-[#0D0D0D] shadow-md">
      <img src={url} alt="Portrait" className="rounded-xl" />
    </div>
  )
}
