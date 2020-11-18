class CreateConversations < ActiveRecord::Migration[6.0]
  def change
    create_table :conversations do |t|
      t.string :title
      t.integer :author_id
      t.integer :receiver_id
      t.boolean :accepted, default: false

      t.timestamps
    end
    add_index :conversations, [:author_id, :receiver_id], unique: true
  end
end
