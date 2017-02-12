class Experience < ApplicationRecord

  belongs_to :user

  belongs_to :location

  validates :story, presence: true

  accepts_nested_attributes_for :location



  def location_attributes=(location_attributes)
    binding.pry

    self.build_location(location_attributes)
    # self.create_location(location_attributes)
    self.save
  end




  def self.search(search)
    if Location.find_by(:city => "#{search}")
      Location.find_by(:city => "#{search}").experiences
    else
      nil
    end
  end


end
