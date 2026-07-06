import { Post, PostType, Repost } from "@lens-protocol/client";
import { useContext, useEffect, useState } from "react";
import { fetchPosts } from "@lens-protocol/client/actions";
import { FORUM_FEED } from "@/app/lib/constantes";
import { ModalContext } from "@/app/providers";
import { Indexar } from "../types/forum.types";

const useForum = () => {
  const contexto = useContext(ModalContext);
  const [feed, setFeed] = useState<(Post | Repost)[]>([]);
  const [allFeed, setAllFeed] = useState<(Post | Repost)[]>([]);
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
            postTypes: [PostType.Root],
            feeds: [
              {
                feed: FORUM_FEED,
              },
            ],
          },
        }
      );
      if (datos?.isOk()) {
        setAllFeed(datos?.value?.items as Post[]);
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
            postTypes: [PostType.Root],
            feeds: [
              {
                feed: FORUM_FEED,
              },
            ],
          },
        }
      );

      if (datos?.isOk()) {
        const newPosts = datos?.value?.items as Post[];
        setAllFeed([...allFeed, ...newPosts]);
        setFeed([...feed, ...newPosts]);
        setCursor(datos?.value?.pageInfo?.next!);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (
      (feed?.length < 1 || contexto?.indexar == Indexar.Exito) &&
      contexto?.clienteLens
    ) {
      getFeed();
    }
  }, [contexto?.clienteLens, contexto?.indexar]);

  useEffect(() => {
    if (contexto?.selectedFilters && allFeed?.length > 0) {
      if (contexto.selectedFilters.length === 0) {
        setFeed(allFeed);
      } else {
        const filteredFeed = allFeed.filter((post) => {
          const postContent =
            post.__typename === "Repost" ? post.repostOf : post;
          const postTags = (postContent?.metadata as any)?.tags || [];
          return contexto.selectedFilters.some((filter) =>
            postTags.includes(filter)
          );
        });
        setFeed(filteredFeed);
      }
    }
  }, [contexto?.selectedFilters, allFeed]);

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
