"use client";

import { FunctionComponent } from "react";

const GdrPunk: FunctionComponent = () => {
  return (
    <div className="bg-zinc-900 w-full flex relative h-fit flex-col border border-zinc-700" dir="rtl">
      <div className="flex relative flex-col sm:flex-row w-full h-fit gap-6 p-6">
        <div className="flex relative w-full sm:w-72 h-64 flex-shrink-0 bg-black border border-zinc-800">
          <video
            className="w-full h-full object-cover"
            draggable={false}
            autoPlay
            muted
            poster="/images/w3fw.png"
            loop
          >
            <source src="/videos/w3fw.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex relative flex-col gap-4 flex-1 w-full h-fit justify-between">
          <div className="flex relative flex-col gap-2 w-full h-fit">
            <div className="text-cyan-500 text-2xl font-bold uppercase tracking-wider">
              W3FW. GDR PUNK
            </div>

            <div className="text-gray-400 text-sm leading-relaxed">
              الموضوع في الچي بي يو كلاسترز المتكومة وصف ورا صف من ماكينات الخياطة الصناعية كده: رندر الصبح، رانواي بعد الضهر، نص الليل خلاص على اللي بعده، وبننام لما الـ"ليه لأ؟" ده، الفرحة اللي محدش يقدر عليها، تنشف.
            </div>
          </div>

          <div className="flex relative flex-col gap-2 w-full h-fit border-t border-zinc-800 pt-3">
            <div className="text-pink-500 text-xs font-semibold">
              أصداء برجهاين. فات الأوان؟ يمكن.
            </div>

            <div className="text-yellow-500 text-sm font-bold">
              أڤانجارد ١٧: أسبوع الموضة غير الرسمي
            </div>

            <div className="text-cyan-600 text-xs">
              منطقة نورث بايب. خلوا التوكنز معاكم
            </div>
          </div>

          <div
            className="text-cyan-500 text-xs font-semibold cursor-pointer hover:text-pink-500 transition-colors w-fit"
            onClick={() => window.open("https://web3fashionweek.com/", "_blank")}
          >
            → web3fashionweek.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default GdrPunk;
