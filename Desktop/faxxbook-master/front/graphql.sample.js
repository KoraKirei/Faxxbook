// React - Apollo client
import { useApolloClient, useQuery } from '@apollo/react-hooks';

const client = useApolloClient();

const GET_USER = gql`
  query getUser($id: String!) {
    getUser(id: $id) {
      id, username, email
    }
  }
`
const getUser = useQuery(GET_USER, {
  variables: {
    id: "180883496377088"
  }
});

const { data } = getUser;
