class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :name
      t.string :password_digest
      t.string :bio
      t.string :avatar
      t.string :dob
      t.string :gender
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
