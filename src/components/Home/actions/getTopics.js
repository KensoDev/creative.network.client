import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';
import { FETCH_ALL_TOPICS } from '../../../ActionTypes';

const client = new Lokka({
  transport: new Transport('/graphql')
});

export function getTopics() {
  return function (dispatch) {
    client.query(`
      {
        allTopics {
          id
          title
          description
          thumbnail
          tags {
            id
            name
          }
        }
      }
    `).then(result => {
      dispatch({
        type: FETCH_ALL_TOPICS,
        topics: result.allTopics,
      });
    });
  };
}
