class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :search]

  def search
    lat = params[:query][:lat]
    long = params[:query][:lng]
    radius = params[:query][:radius].to_i
    users = User.within(radius, :origin => [lat, long])
    # if params[:query][:agemin] && params[:query][:agemax]
    #   users = users.where(age: params[:query][:agemin]..params[:query][:agemax])
    # elsif params[:query][:agemin]
    #   users = users.where("age >= ?", params[:query][:agemin])
    # elsif params[:query][:agemax]
    #   users = users.where("age <= ?", params[:query][:agemax])
    # end
    if params[:query][:gender] == 'male'
      users = users.where(gender: 'male')
    elsif params[:query][:gender] == 'female'
      users = users.where(gender: 'female')
    elsif params[:query][:gender] == 'nonbinary'
      users = users.where(gender: 'nonbinary')
    end
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
    params.require(:user).permit(:username, :password, :bio, :dob, :avatar)
  end

end
