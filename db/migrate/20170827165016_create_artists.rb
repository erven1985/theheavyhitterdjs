class CreateArtists < ActiveRecord::Migration[5.0]
  def change
    create_table :artists do |t|
      t.string :artist_type
      t.string :name1
      t.string :name2
      t.string :playlist
      t.string :facebook
      t.string :instagram
      t.string :twitter
      t.text :about
      t.string :gigwell_id

      t.timestamps
    end
  end
end
