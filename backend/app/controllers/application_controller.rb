class ApplicationController < ActionController::API

  def encode_token(payload)
    JWT.encode(payload, 'trailblaze_app')
  end

  def auth_header
    request.headers['Authorization']
  end

  def decode_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'trailblaze_app', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def current_user
    if decode_token 
      user_id = decode_token[0]['user_id']
      user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end

  def require_login
    render json: { error: 'Log in to continue' }, status: :unauthorized unless logged_in?
  end

  def authorize
    render json: { error: 'You are not authorized to view that page' } unless @user == current_user
  end
end
