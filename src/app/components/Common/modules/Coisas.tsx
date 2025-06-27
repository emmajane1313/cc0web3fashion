import Image from "next/image";

export default function Coisas() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col xl:flex-row gap-6 h-full">
      <div className="bg-slate-800 p-4 rounded shadow-inner border border-purple-500 flex w-full xl:w-fit h-full flex-col grow">
        <div className="text-lg font-bold text-cyan-300 mb-2">
          Coisas Pra Usar
        </div>
        <ul className="space-y-2 text-sm">
          {[
            "https://digitalax.xyz",
            "https://f3manifesto.xyz",
            "https://chromadin.xyz",
            "https://coinop.themanufactory.xyz",
            "https://cypher.digitalax.xyz",
            "https://triplea.agentmeme.xyz",
            "https://emancipa.xyz",
            "https://emancipa.net",
          ].map((enlace, i) => {
            return (
              <li key={i}>
                <a href={enlace} className="hover:text-white">
                  {enlace?.split("https://")?.[1]}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-slate-900 p-4 rounded shadow-inner border border-gray-700 col-span-2 flex flex-col w-full h-full">
        <div dir="rtl" className="text-xl font-semibold text-yellow-300 mb-4">
          تو می‌تونی موهاتو باز بذاری
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full h-fit">
          {["/images/cco1.png", "/images/cco2.png", "/images/cco3.png"].map(
            (imagen, i) => {
              return (
                <div
                  className="relative flex bg-black border border-gray-600 p-2 w-full h-60"
                  key={i}
                >
                  <Image
                    src={imagen}
                    layout="fill"
                    objectFit="cover"
                    draggable={false}
                    alt="Web3 Fashion by Emma-Jane MacKinnon-Lee"
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
