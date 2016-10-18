class Location < ApplicationRecord

  has_many :experiences
  has_many :users, :through => :experiences

  has_many :comments
  has_many :user_comments, through: :users, source: :comments


  validates :name, presence: true
  validates :city, presence: true
  validates :state, presence: true


  def self.search(search)
    if self.find_by(:city => "#{search}")
      self.find_by(:city => "#{search}").experiences
    else
      nil
    end
  end



end
