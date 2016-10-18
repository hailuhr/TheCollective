class Experience < ApplicationRecord

  belongs_to :user
  belongs_to :location

  accepts_nested_attributes_for :location

  validates :story, presence: true


  def self.search(search)
    if Location.find_by(:city => "#{search}")
      Location.find_by(:city => "#{search}").experiences
    else
      nil
    end
  end


end
