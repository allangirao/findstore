class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :address
      t.string :place_id
      t.st_point :point, geographic: true
      t.timestamps
    end

    add_index :stores, :point, using: :gist
  end
end
