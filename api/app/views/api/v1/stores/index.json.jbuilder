json.array! @stores do |store|
  json.id store.id
  json.lonlat store.point
  json.name store.name
  json.address store.address
  json.place_id store.place_id
  json.ratings_count store.ratings.count
  json.ratings_average store.ratings_average
end
