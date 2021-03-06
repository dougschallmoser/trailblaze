class Api::V1::AuthController < ApplicationController

  def create
    user = User.find_by(email: params[:user][:email])
    if user && user.authenticate(params[:user][:password])
      token = encode_token({ user_id: user.id })
      render json: { user: UserSerializer.new(user), jwt: token }, status: :accepted
    else 
      render json: { message: 'Invalid credentials. Please try again.' }
    end
  end

  private

  def login_params
    params.require(:user).permit(:email, :password)
  end
end
