class ExperiencesController < ApplicationController


    def new
      @experience = Experience.new
      @experience.build_location
      @locations = Location.all
    end


    def show
      @experience = Experience.find_by_id(params[:id])
    end


    def create
      # binding.pry
      if params[:experience][:location_id].empty?
        @experience = Experience.create(experience_params)
        @experience.save
      else
        @experience = Experience.create(story: experience_params[:story], user_id: experience_params[:user_id], location_id: experience_params[:location_id])
      end

      if @experience.valid?
          redirect_to experience_path(@experience)
      else
        redirect_to new_experience_path
      end

    end


    def edit
      @experience = Experience.find_by_id(params[:id])
    end


    def update
      @experience = Experience.find(params[:id])
      @experience.update(experience_params)
      redirect_to experience_path(@experience)
    end




    private

      def experience_params
          params.require(:experience).permit(:story, :user_id, :location_id, location_attributes: [:name, :city, :state, :address])
      end


end
