class Api::V1::OsmStoresController < ApplicationController
  def index
    places = GetOsmCafeListService.new(params[:latitude], params[:longitude]).call
    nodes = places['elements'].select { |el| el['type'] == 'node' }
    render json: nodes
  end
end
