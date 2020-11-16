class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :receiver, :accepted, :created_at
  has_many :messages
end
