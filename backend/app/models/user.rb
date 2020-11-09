class User < ApplicationRecord
  has_secure_password 
  # validates :username, uniqueness: { case_sensitive: false }
  acts_as_mappable
end
