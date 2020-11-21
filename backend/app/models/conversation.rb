class Conversation < ApplicationRecord
  has_many :messages, -> { order(created_at: :asc) }, dependent: :destroy
  belongs_to :author, class_name: 'User'
  belongs_to :receiver, class_name: 'User', optional: true
  validates :author, uniqueness: {scope: :receiver}
  scope :by_user, -> (id) { where(author_id: id).or(Conversation.where(receiver_id: id)) }
end
