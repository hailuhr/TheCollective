class Location < ApplicationRecord

  has_many :experiences

  has_many :users, :through => :experiences

  has_many :comments




  validates_presence_of :name, :city, :state



  def self.search(search)
    if self.find_by(:city => "#{search}")
      self.find_by(:city => "#{search}").experiences
    else
      nil
    end
  end


end
