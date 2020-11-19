class Api::V1::FavoritesController < ApplicationController

  def index
    favorites = Favorite.all 
    render json: favorites
  end

  def create
    favorite = Favorite.new(favorite_params)
    if favorite.save
      render json: favorite
    end
  end

  def destroy
    favorite = Favorite.find_by(id: params[:id])
    favorite.destroy
  end

  private

  def favorite_params
    params.require(:favorite).permit(:name, :location, :length, :imgsmall, :imgmed, :ascent, :low, :high, :url, :summary, :latitude, :longitude, :user_id)
  end

end
