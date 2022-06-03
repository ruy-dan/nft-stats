import { PropsWithChildren } from "react";

export default function SiteHeading({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <h1 className="text-6xl my-4 self-start tracking-normal">{children}</h1>
      {/*<h1 className="text-4xl my-4 font-extrabold self-start text-transparent bg-clip-text bg-gradient-to-r from-stone-50 to-zinc-600">{children}</h1>*/}
      <span className="text-white">curated data for the top NFT collections</span>
      <div className="text-xl pt-4 text-white">
        <a href="https://twitter.com/" className="px-1">
          <i className="bx bxl-twitter bx-md transition duration-150 hover:text-red-400" /></a>
        <a href="https://github.com/" className="px-1"><i className="bx bxl-github bx-md transition duration-150 hover:text-red-400" /></a>
        <a href="https://discord.com/" className="px-1" ><i className="bx bxl-discord bx-md transition duration-150 hover:text-red-400" /></a>
      </div>
    </div>

  );

}
