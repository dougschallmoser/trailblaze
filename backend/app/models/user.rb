class User < ApplicationRecord
  has_secure_password 
  validates :email, uniqueness: true
  validates :name, :email, :bio, :gender, :dob, :avatar, :lat, :lng, presence: true
  acts_as_mappable

  def age
    ((Time.zone.now - self.dob.to_time) / 1.year.seconds).floor
  end
end
