class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :receiver, :accepted
  has_many :messages
end
