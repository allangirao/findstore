require 'rest-client'
require 'json'

class GetOsmCafeListService
  def initialize(latitude, longitude)
    @latitude = latitude.to_f
    @longitude = longitude.to_f
  end

  def call
    begin
      data = "[out:json];(node[shop=coffee](bbox);way[shop=coffee](bbox);rel[shop=coffee](bbox);node[amenity=cafe](bbox);way[amenity=cafe](bbox);rel[amenity=cafe](bbox););out;"
      bbox = get_bbox
      base_url = "http://overpass-api.de/api/interpreter/?data=#{data}&bbox=#{bbox}"
      response = RestClient.get base_url
      JSON.parse(response.body)
    rescue RestClient::ExceptionWithResponse => e
      e.response
    end
  end

  def get_bbox
    lon_min = @longitude - 0.0951
    lon_max = @longitude + 0.0951
    lat_min = @latitude - 0.0329
    lat_max = @latitude + 0.0329
    "#{lon_min},#{lat_min},#{lon_max},#{lat_max}"
  end
end
