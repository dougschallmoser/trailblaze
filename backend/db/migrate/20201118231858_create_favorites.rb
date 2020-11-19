class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.string :name
      t.string :location
      t.string :length
      t.string :ascent
      t.integer :low
      t.integer :high
      t.string :url
      t.string :summary
      t.string :imgmed
      t.string :imgsmall
      t.float :latitude
      t.float :longitude
      t.integer :user_id

      t.timestamps
    end
  end
end
