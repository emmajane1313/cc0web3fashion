import { Post, Repost } from "@lens-protocol/client";
import { useContext, useEffect, useState } from "react";
import { fetchPosts } from "@lens-protocol/client/actions";
import { FORUM_FEED } from "@/app/lib/constantes";
import { ModalContext } from "@/app/providers";

const useForum = () => {
  const contexto = useContext(ModalContext);
  const [feed, setFeed] = useState<(Post | Repost)[]>([]);
  const [feedCargando, setFeedCargando] = useState<boolean>(false);
  const [cursor, setCursor] = useState<string | undefined>();
  const [openComment, setOpenComment] = useState<number | undefined>(undefined);
  const getFeed = async () => {
    setFeedCargando(true);
    try {
      const datos = await fetchPosts(
        contexto?.lensConectado?.sessionClient ?? contexto?.clienteLens!,
        {
          filter: {
            feeds: [
              {
                feed: FORUM_FEED,
              },
            ],
          },
        }
      );
      if (datos?.isOk()) {
        setFeed(datos?.value?.items as Post[]);
        setCursor(datos?.value?.pageInfo?.next!);
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setFeedCargando(false);
  };

  const getMoreFeed = async () => {
    try {
      const datos = await fetchPosts(
        contexto?.lensConectado?.sessionClient ?? contexto?.clienteLens!,
        {
          cursor,
          filter: {
            feeds: [
              {
                feed: FORUM_FEED,
              },
            ],
          },
        }
      );

      if (datos?.isOk()) {
        setFeed([...feed, ...(datos?.value?.items as Post[])]);
        setCursor(datos?.value?.pageInfo?.next!);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (feed?.length < 1 && contexto?.clienteLens) {
      getFeed();
    }
  }, [contexto?.clienteLens]);

  return {
    feedCargando,
    feed,
    getMoreFeed,
    cursor,
    openComment,
    setOpenComment,
  };
};

export default useForum;
