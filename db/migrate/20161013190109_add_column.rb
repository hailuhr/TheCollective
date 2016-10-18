class AddColumn < ActiveRecord::Migration[5.0]

  def change
    add_column :experiences, :story, :string
  end


end
