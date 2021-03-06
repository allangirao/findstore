class Store < ApplicationRecord
  has_many :ratings
  validates_presence_of :point, :name, :address, :place_id
  validates :place_id, uniqueness: true

  scope :within, -> (latitude, longitude, distance_in_km = 10) {
    where(
      %{
        ST_Distance(point, 'POINT(%f %f)') < %d
      } % [longitude, latitude, distance_in_km * 1000]
    )
  }

  def ratings_average
    return 0 if self.ratings.empty?
    (self.ratings.sum(:value) / self.ratings.count).to_i
  end
end
