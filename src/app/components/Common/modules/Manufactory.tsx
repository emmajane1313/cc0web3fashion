"use client";

import Image from "next/image";

export default function Manufactory() {
  return (
    <div className="max-w-3xl mx-auto rounded-xl shadow-md shadow-slate-800 overflow-hidden bg-slate-800">
      <div className="w-full h-64 relative">
        <Image
          src="/images/fab.png"
          alt="The Microfactory"
          layout="fill"
          draggable={false}
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Mikro Fabrika</h2>

        <p className="text-sm text-gray-500 mb-1">マイクロファクトリー</p>

        <p className="text-gray-700">
          クリエイターが自分の感覚で動き、技術と視点をシェアしながら、
          <span
            onClick={() => window.open("https://themanufactory.xyz/")}
            className="text-blue-600 underline cursor-pointer"
          >
            本当に意味のあるツールを選び取っていく場所。
          </span>
        </p>

        <hr className="mt-4 border-dotted border-gray-300" />
      </div>
    </div>
  );
}
