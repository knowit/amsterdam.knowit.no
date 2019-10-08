import { useStaticQuery, graphql } from 'gatsby';

export const fetchSlots = () => {
  const data = useStaticQuery(graphql`
      query data {
          allAirtable {
              edges {
                  node {
                      data {
                          title
                          userIds
                          email
                          description
                          type
                          start
                          end
                          date
                          duration
                          room
                          speaker_bio
                          speaker_favourites
                          speaker_recreation
                          speaker_image {
                              localFiles {
                                  publicURL
                              }
                          }
                      }
                  }
              }
          }
      }
  `);
  const slots =
    data && data.allAirtable && data.allAirtable.edges
      ? data.allAirtable.edges.flatMap(edge => edge.node.data)
      : [];
  return slots;
};
