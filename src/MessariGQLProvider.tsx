import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import React, { FC, useMemo } from "react";

import typePolicies, { possibleTypes } from "./gqlTypePolicies";

const httpLink = createHttpLink({
  uri: "https://graphql.messari.io/query",
  // useGETForQueries: true,
});

const wsLink = new WebSocketLink({
  uri: "wss:://graphql.messari.io/query",
  options: {
    reconnect: false,
    lazy: true,
  },
});

const MessariGQLProvider: FC = ({ children }) => {
  // const authorizationHeader = useAuthorizationHeader();
  // const authHeaderRef = React.useRef(authorizationHeader);

  /*
    The auth header is synced with a ref to ensure that the Apollo Client is not re-created
    whenever the auth header changes. If the useMemo hook which creates the client (below)
    depended upon authorizationHeader then it would need to be recomputed every time
    authorizationHeader changes.
  */
  // React.useEffect(() => {
  //   authHeaderRef.current = authorizationHeader;
  // }, [authorizationHeader]);

  const client = useMemo(() => {
    // const authMiddleware = new ApolloLink((operation, forward) => {
    //   if (authHeaderRef.current !== null) {
    //     // add the authorization to the headers
    //     operation.setContext(({ headers = {} }) => ({
    //       headers: {
    //         ...authHeaderRef.current,
    //         ...headers,
    //       },
    //     }));
    //   }
    //   return forward(operation);
    // });

    const errorMiddleware = onError(
      ({ graphQLErrors, networkError, operation }) => {
        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        } else {
          graphQLErrors?.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        }
      }
    );

    return new ApolloClient({
      cache: new InMemoryCache({ typePolicies, possibleTypes }),
      link: split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        ApolloLink.from([
          // authMiddleware,
          errorMiddleware,
          httpLink,
        ])
      ),
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default MessariGQLProvider;
