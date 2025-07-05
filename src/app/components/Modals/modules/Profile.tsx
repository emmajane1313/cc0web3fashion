import { handleImage } from "@/app/lib/helpers/handleImage";
import moment from "moment";
import Image from "next/legacy/image";
import { FunctionComponent, JSX } from "react";
import { ProfileProps } from "../types/modals.types";
import Reactions from "./Reactions";

const Profile: FunctionComponent<ProfileProps> = ({
  post,
  index,
  setOpenComment,
}): JSX.Element => {

  return (
    <div
      className={`relative h-auto pr-px py-px w-full sm:w-40 preG:min-w-[7.5rem] bg-slate-500/20`}
    >
      <div
        className={`relative w-full h-full flex flex-col items-start sm:items-center py-1.5 px-1 gap-3`}
      >
        <div
          className={`relative flex w-fit h-fit justify-self-center`}
        >
          <div className="relative w-8 h-8 bg-black rounded-full flex">
            <Image
              src={handleImage(
                post?.__typename !== "Repost"
                  ? post?.author?.metadata?.picture
                  : post?.repostOf?.author?.metadata?.picture
              )}
              objectFit="cover"
              alt="pfp"
              layout="fill"
              className="rounded-full"
              draggable={false}
            />
          </div>
        </div>
        <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
          <div
            className={`relative w-fit h-fit font-dosis text-xs justify-self-center`}
          >
            {post?.__typename !== "Repost"
              ? Number(post?.author?.username?.localName?.length) > 25
                ? post?.author?.username?.localName?.substring(0, 20) + "..."
                : post?.author?.username?.localName
              : Number(post?.repostOf?.author?.username?.localName?.length) > 20
              ? post?.repostOf?.author?.username?.localName?.substring(0, 25) +
                "..."
              : post?.repostOf?.author?.username?.localName}
          </div>
        </div>
        <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
          <div
            className={`relative w-fit h-fit font-clash text-xs justify-self-center text-white`}
          >
            {post?.__typename !== "Repost"
              ? post?.author?.username?.value?.slice(0, 9)
              : post?.repostOf?.author?.username?.value?.slice(0, 9)}
          </div>
        </div>
        <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
          <div
            className={`relative w-fit h-fit font-dosis justify-self-center fo:pb-0 pb-2 text-xs `}
          >
            {moment(`${post?.timestamp}`).fromNow()}
          </div>
        </div>
        <div className="relative w-full h-full grid grid-flow-col auto-cols-auto items-end pt-3">
          <Reactions
            publication={post?.__typename == "Repost" ? post?.repostOf : post}
            setOpenComment={setOpenComment}
            index={index}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
