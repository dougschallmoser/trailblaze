class Conversation < ApplicationRecord
  has_many :messages, -> { order(created_at: :asc) }, dependent: :destroy
  belongs_to :author, class_name: 'User'
  belongs_to :receiver, class_name: 'User', optional: true
  validates :author, uniqueness: {scope: :receiver}
end
