class AddOrderToListItem < ActiveRecord::Migration
  def change
    add_column :items, :order, :integer
  end
end
