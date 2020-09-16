import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Item from './Item'

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      description
      price
      image
      largeImage
    }
  }
`

const Items = () => {
  return (
    <S.Center>
      <p> Items! </p>
      <Query query={ALL_ITEMS_QUERY} >
        {({ data, error, loading }) => {
          loading && <p>Loading...</p>
          error && <p>Error: {error.message}</p>
          return (
            <S.ItemList>
              {data.items.map(item =>
                <Item key={item.id} item={item} />
              )}
            </S.ItemList>
          )
        }}
      </Query>
    </S.Center>
  )
}

const S = {
  Center: styled.div`
    text-align: center;
  `,
  ItemList: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    min-width: ${({ theme }) => theme.maxWidth};
  `
}

export default Items
