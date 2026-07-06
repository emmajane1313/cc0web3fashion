"use client";

import { EVENTS } from "@/app/lib/constantes";
import Wrapper from "../../Common/modules/Wrapper";


export default function Entry() {
  return (
    <Wrapper
      children={
        <div className="bg-zinc-800 p-4 flex items-center justify-between border border-zinc-700">
          <div className="border-l border-yellow-500 pl-4 relative space-y-6">
            {EVENTS.map((event, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-2.5 top-0 w-3 h-3 bg-cyan-400 rounded-full border border-white shadow" />
                <div className="text-sm text-gray-300">
                  <div className="font-bold text-yellow-300">{event.date}</div>
                  <div className="text-cyan-200">{event.title}</div>
                  {event.description && (
                    <p className="text-xs text-gray-400 mt-1">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
