class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :receiver
  has_many :messages
end
