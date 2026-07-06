import { graphClient } from "@/app/lib/graph/client";
import { FetchResult, gql } from "@apollo/client";

const COLLECTIONS = gql`
  query {
    drops {
      uri
      collections {
        uri
        collectionId
        edition
        tokensSold
        metadata {
          title
          image
          video
          description
          config
        }
        acceptedTokens
        prices
      }
      metadata {
        image
        title
      }
    }
  }
`;

export const getCollections = async (): Promise<FetchResult | void> => {
  let timeoutId: NodeJS.Timeout | undefined;
  const queryPromise = graphClient.query({
    query: COLLECTIONS,

    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  const timeoutPromise = new Promise((resolve) => {
    timeoutId = setTimeout(() => {
      resolve({ timedOut: true });
    }, 60000);
  });

  const result: any = await Promise.race([queryPromise, timeoutPromise]);

  timeoutId && clearTimeout(timeoutId);

  if (result.timedOut) {
    return;
  } else {
    return result;
  }
};
