class AddGigwellNumberColumnsToArtists < ActiveRecord::Migration[5.0]
  def change
    add_column :artists, :gigwell_number, :string
  end
end
