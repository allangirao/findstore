class Api::V1::StoresController < ApplicationController
  before_action :set_store, only: [:show]

  def show
  end

  private

  def set_store
    @store = Store.find_by!(place_id: params[:id])
  end
end
