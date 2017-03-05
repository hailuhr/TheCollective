class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :country, :zipcode, :longitude, :latitude

  has_many :comments

  has_many :experiences
end
