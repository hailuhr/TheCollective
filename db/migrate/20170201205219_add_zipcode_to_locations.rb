class AddZipcodeToLocations < ActiveRecord::Migration[5.0]
  def change
    add_column :locations, :zipcode, :integer
  end
end
