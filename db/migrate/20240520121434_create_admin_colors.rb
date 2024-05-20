class CreateAdminColors < ActiveRecord::Migration[7.0]
  def change
    create_table :admin_colors, id: :uuid do |t|
    	t.string  :name
    	t.string  :value

      t.references :users

      t.timestamps
    end
  end
end
