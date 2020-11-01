json.id @store.id
json.lonlat @store.point
json.name @store.name
json.address @store.address
json.place_id @store.place_id

json.ratings @store.ratings do |rating|
  json.value rating.value
  json.opinion rating.opinion
  json.username rating.username
  json.date rating.created_at.strftime("%d/%m/%Y")
end

json.ratings_count @store.ratings.count
json.ratings_average @store.ratings_average
