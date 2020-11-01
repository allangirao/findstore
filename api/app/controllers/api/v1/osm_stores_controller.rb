class Api::V1::OsmStoresController < ApplicationController
  def index
    places = GetOsmCafeListService.new(params[:latitude], params[:longitude]).call
    render json: places
  end
end
