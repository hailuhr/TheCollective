class CreateExperiences < ActiveRecord::Migration[5.0]
  def change
    create_table :experiences do |t|
      t.integer :user_id
      t.integer :location_id
      t.string :images, array: true
      t.timestamps
    end
  end
end
