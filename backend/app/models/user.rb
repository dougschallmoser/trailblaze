class User < ApplicationRecord
  has_secure_password 
  # validates :username, uniqueness: { case_sensitive: false }
  acts_as_mappable

  def age
    ((Time.zone.now - self.dob.to_time) / 1.year.seconds).floor
  end
end
