class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :search]

  def search
    lat = params[:location][:lat]
    lng = params[:location][:lng]
    users = User.within(100, :origin => [lat, lng])
    render json: users
  end

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    user = User.new(user_params)
    if user.save
      token = encode_token(user_id: user.id)
      render json: { user: UserSerializer.new(user), jwt: token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :bio, :avatar)
  end

  def location_params
    params.require(:location).permit(:lat, :lng)
  end

end
