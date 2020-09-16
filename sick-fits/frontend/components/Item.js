import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Title from './styles/Title'
import ItemStyles from './styles/ItemStyles'
import PriceTag from './styles/PriceTag'

const Item = ({ item }) => {
  return (
    <ItemStyles>
      <Title>
        <Link href={{
          pathname: '/shop/item',
          query: { id: item.id }
        }}>
          <a>{item.title}</a>
        </Link>
      </Title>
      <PriceTag>{item.price}</PriceTag>
    </ItemStyles>
  )
}


Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
  }),
}

export default Item
