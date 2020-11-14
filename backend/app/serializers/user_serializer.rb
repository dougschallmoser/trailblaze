class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :avatar, :bio, :dob, :gender
end
