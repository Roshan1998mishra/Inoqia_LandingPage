import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-40 ${inter.className}`}
    >
  
      <div className="relative  place-items-center  ">
      <h1 className="text-[80px]">Coming soon</h1>
        <p className="fixed left-0 mt-5 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Powered by&nbsp;
          <code className="font-mono font-bold">Inoqia Systems pvt ltd.</code>
        </p>
      </div>

   
    </main>
  )
}
