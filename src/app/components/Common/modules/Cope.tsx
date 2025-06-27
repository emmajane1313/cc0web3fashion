import Image from "next/image";
import { FunctionComponent } from "react";
import MarqueeText from "react-fast-marquee";

const Cope: FunctionComponent = () => {
  return (
    <div className="relative w-full h-fit py-3 flex items-center justify-center flex-row bg-gradient-to-l from-gray-200/20 to-slate rounded-md">
      <MarqueeText gradient={false} speed={100} direction={"right"}>
        {Array.from({ length: 30 }).map((_, index: number) => {
          return (
            <div
              className="relative flex flex-row gap-6 px-5 text-7xl items-center justify-center"
              key={index}
            >
              <span
                dir={"rtl"}
                className="relative font-mont"
                style={{
                  WebkitTextStroke: "1px #9333ea",
                  color: "transparent",
                }}
              >
                אחי, איך לעזאזל עושים מזה שקל אם זה כולו CC0؟
              </span>
              <span className="relative w-fit h-fit">
                <div className="relative w-20 h-20">
                  <Image
                    src={"/images/cope.png"}
                    draggable={false}
                    layout="fill"
                    alt="CC0 Cope"
                  />
                </div>
              </span>
              <span
                dir={"rtl"}
                className="relative font-mont"
                style={{
                  WebkitTextStroke: "1px #9333ea",
                  color: "transparent",
                }}
              >
                אחי, איך לעזאזל עושים מזה שקל אם זה כולו CC0؟
              </span>
              <span className="relative w-fit h-fit">
                <div className="relative w-20 h-20">
                  <Image
                    src={"/images/cope.png"}
                    draggable={false}
                    layout="fill"
                    alt="CC0 Cope"
                  />
                </div>
              </span>
            </div>
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default Cope;
