class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :search]

  def search
    # if (params[:lat] && params[:lng])
    # end
    # lat = params[:lat].to_f
    # lng = params[:lng].to_f
    coordinates = params[:search].split(' ')
    lat = coordinates[0].to_f
    lng = coordinates[1].to_f
    binding.pry
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

  def search_params
    params.require(:search).permit(:location)
  end

end
