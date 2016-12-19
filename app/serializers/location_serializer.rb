class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state

  has_many :comments

  has_many :experiences
end
