class Api::V1::FavoritesController < ApplicationController
  before_action :require_login
  before_action :set_user, only: [:index]
  before_action :authorize, only: [:index]

  def index
    favorites = Favorite.by_user(params[:user_id])
    render json: favorites
  end

  def create
    favorite = Favorite.new(favorite_params)
    if favorite.save
      render json: favorite
    else 
      render json: { error: favorite.errors.full_messages }
    end
  end

  def destroy
    favorite = Favorite.find_by(id: params[:id])
    favorite.destroy
    if !favorite.destroyed?
      render json: { error: 'An error occured when deleting' }
    else 
      render json: { success: 'success' }
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:name, :location, :length, :imgsmall, :imgmed, :ascent, :low, :high, :url, :summary, :latitude, :longitude, :user_id)
  end

  def set_user
    @user = User.find_by(id: params[:user_id])
  end
end
