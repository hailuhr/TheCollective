class Location < ApplicationRecord

  has_many :experiences

  has_many :users, :through => :experiences

  has_many :comments




  validates_presence_of :name, :address, :city, :country

    # -----------------------------------------
      # with an attributes
    geocoded_by :address # address is an attribute of MyModel

    # or with a method
    geocoded_by :full_address # full_address is a method which take some model's attributes to get a formatted address for example

    # the callback to set longitude and latitude
    after_validation :geocode

    # the full_address method
    def full_address
      "#{address}, #{zipcode}, #{city}, #{country}"
    end

    # -----------------------------------------


  def self.search(search)
    # binding.pry

    search_term = search.split(" ").map{|l| l.capitalize}.join(" ")
    if self.find_by(:city => search_term)
      self.find_by(:city => search_term).experiences
    else
      nil
    end
  end

  # def self.search(search)
  #   search_term_one = search.split(" ").map{|l| l.capitalize}.join(" ")
  #   search_term_two = search.split(" ").map{|l| l.downcase}.join(" ")
  #   if self.find_by(:city => search_term_one) || self.find_by(:city => search_term_two)
  #     experiences = []
  #     if self.find_by(:city => search_term_one)
  #       experiences << self.find_by(:city => search_term_one).experiences
  #     end
  #     if self.find_by(:city => search_term_two)
  #       experiences << self.find_by(:city => search_term_two).experiences
  #     end
  #   else
  #     nil
  #   end
  # end


end
