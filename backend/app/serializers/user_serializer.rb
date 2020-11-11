class UserSerializer < ActiveModel::Serializer
  attributes :username, :avatar, :bio, :id, :dob
end
