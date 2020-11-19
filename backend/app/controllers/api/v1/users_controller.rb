class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :search]

  def search
    lat = params[:query][:lat]
    long = params[:query][:lng]
    radius = params[:query][:radius].to_i
    agemin = params[:query][:agemin]
    agemax = params[:query][:agemax]
    gender = params[:query][:gender]
    users = User.within(radius, :origin => [lat, long])
    if gender == 'male'
      users = users.where(gender: 'male')
    elsif gender == 'female'
      users = users.where(gender: 'female')
    elsif gender== 'nonbinary'
      users = users.where(gender: 'nonbinary')
    end

    if agemin != '' && agemax != ''
      users = users.select {|user| user.age.between?(agemin.to_i, agemax.to_i)}
    elsif agemin != ''
      users = users.select {|user| user.age >= agemin.to_i}
    elsif agemax !=''
      users = users.select {|user| user.age <= agemax.to_i}
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
      render json: { error: user.errors.full_messages }
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password, :bio, :dob, :avatar, :gender, :lat, :lng)
  end
end
