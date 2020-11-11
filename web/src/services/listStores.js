import Api from '../api'

const ListStores = {
  index: (latitude, longitude) => Api.get(
    '/osm_stores',
    {
      params: {latitude, longitude}
    }
  )
}

export default ListStores
