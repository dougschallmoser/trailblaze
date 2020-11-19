class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :length, :imgsmall, :imgmed, :ascent, :low, :high, :url, :summary, :image, :latitude, :longitude, :user_id
end
