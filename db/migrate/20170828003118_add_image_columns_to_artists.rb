class AddImageColumnsToArtists < ActiveRecord::Migration[5.0]
	def up
    add_attachment :artists, :image
  end

  def down
    remove_attachment :artists, :image
  end
end
