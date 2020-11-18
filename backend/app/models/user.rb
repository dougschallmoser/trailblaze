class User < ApplicationRecord
  has_secure_password 
  has_many :authored_conversations, class_name: 'Conversation', foreign_key: 'author_id'
  has_many :received_conversations, class_name: 'Conversation', foreign_key: 'received_id'
  has_many :messages, dependent: :destroy
  validates :email, uniqueness: true
  validates :name, :email, :bio, :gender, :dob, :avatar, presence: true
  validates_presence_of :lat, :message => "- You must allow Trailblaze access to your location"
  validates_presence_of :lng, :message => "- You must allow Trailblaze access to your location"
  before_save { name.capitalize() }
  acts_as_mappable

  def age
    ((Time.zone.now - self.dob.to_time) / 1.year.seconds).floor
  end
end
