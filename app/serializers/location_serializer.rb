class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state

  has_many :comments

end
