class User < ApplicationRecord
  has_secure_password 
  has_many :authored_conversations, class_name: 'Conversation', foreign_key: 'author_id'
  has_many :received_conversations, class_name: 'Conversation', foreign_key: 'received_id'
  has_many :messages, dependent: :destroy
  validates :email, uniqueness: true
  validates :name, :email, :bio, :gender, :dob, :avatar, :lat, :lng, presence: true
  acts_as_mappable

  def age
    ((Time.zone.now - self.dob.to_time) / 1.year.seconds).floor
  end
end
