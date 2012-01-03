class List < ActiveRecord::Base
  
  validates_presence_of :name
  
  has_many :items, :dependent => :destroy 
  accepts_nested_attributes_for :items, :reject_if => lambda { |a| a[:content].blank? }, :allow_destroy => true
  
end
