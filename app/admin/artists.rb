ActiveAdmin.register Artist do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :artist_type, :name1, :name2, :playlist, :facebook, :instagram, :twitter, :about, :gigwell_id, :image, :artist
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end
  
  index do
    selectable_column
    id_column
    column 'First Name', :name1
    column 'Last Name', :name2
    column 'Type', :artist_type
    column 'Image', sortable: :image_file_name do |firmware| link_to firmware.image_file_name, firmware.image.url end
    column :created_at
    column :updated_at
    actions
  end

  form do |f|
    
    f.inputs "Artist" do
      f.input :name1, required: true
      f.input :name2
      f.input :artist_type, required: true
      f.input :playlist
      f.input :facebook
      f.input :twitter
      f.input :instagram
      f.input :gigwell_id
      f.input :gigwell_number
      f.input :about
      f.input :image, required: true, as: :file
    end
    f.actions
  end	

end
