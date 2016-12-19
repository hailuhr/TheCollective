class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :story, :user_id, :location_id

  belongs_to :location
end
