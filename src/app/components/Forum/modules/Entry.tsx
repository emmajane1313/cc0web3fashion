"use client";

import Wrapper from "../../Common/modules/Wrapper";
import Feed from "./Feed";
import Forum from "./Forum";

export default function Entry() {
  return (
    <Wrapper
      children={
        <div className="flex flex-col items-start justify-start gap-4">
          <Forum />
          <Feed />
        </div>
      }
    />
  );
}
