import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Component() {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-8 bg-[#806851] text-[#fef1ce] ${inter.className}`}>
      <h1 className="text-base font-light mb-8 text-[#f7d08e]">dagnys favorite poem</h1>
      <div className="max-w-2xl text-center">
        <h2 className="text-2xl font-light mb-2">Drifting Flowers of the Sea</h2>
        <p className="text-lg mb-4">Sadakichi Hartmann</p>
        <pre className="whitespace-pre-wrap text-left font-light leading-relaxed">
{`Across the dunes, in the waning light,
The rising moon pours her amber rays,
Through the slumbrous air of the dim, brown night
The pungent smell of the seaweed strays—
     From vast and trackless spaces
       Where wind and water meet,
         White flowers, that rise from the sleepless deep,
             Come drifting to my feet.
     They flutter the shore in a drowsy tune,
       Unfurl their bloom to the lightlorn sky,
         Allow a caress to the rising moon,
             Then fall to slumber, and fade, and die.

White flowers, a-bloom on the vagrant deep,
Like dreams of love, rising out of sleep,
You are the songs, I dreamt but never sung,
Pale hopes my thoughts alone have known,
Vain words ne'er uttered, though on the tongue,
That winds to the sibilant seas have blown.
      In you, I see the everlasting drift of years
        That will endure all sorrows, smiles and tears;
          For when the bell of time will ring the doom
            To all the follies of the human race,
               You still will rise in fugitive bloom
                  And garland the shores of ruined space.`}
        </pre>
      </div>
    </div>
  )
}