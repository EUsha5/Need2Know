import gql from 'graphql-tag';

export const PRODUCT_CREATE = gql`
  mutation ProductCreate($data: ProductCreateInput!) {
    ProductCreate(data: $data) {
      id
    }
  }
`;

export const PRODUCT_QUERY = gql`
  mutation ProductCreate($data: ProductCreateInput!) {
    ProductCreate(data: $data) {
      id
    }
  }
`;

/*
export const LISTING_DELETE_MUTATION = gql`
  mutation ListingDelete($id: ID!) {
    listingDelete(data: { id: $id }) {
      success
    }
  }
`;

export const LISTING_SHARE_MUTATION = gql`
  mutation ListingShare($id: ID!, $email: String!) {
    listingShare(id: $id, email: $email) {
      success
    }
  }
`;


export const PROPERTIES_LIST_QUERY = gql`
  query PropertiesList {
    propertiesList {
      items {
        id
        createdAt
        updatedAt
        pictures {
          items {
            id
            downloadUrl
            shareUrl
          }
        }
        bedrooms
        title
        description
        sqFootage
        bathrooms
        garage
        pool
      }
    }
  }
`;
*/