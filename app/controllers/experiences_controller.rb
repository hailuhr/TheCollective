class ExperiencesController < ApplicationController

    def new
      @location = Location.new
      @experience = Experience.new
      @experience.build_location
      @locations = Location.all
    end


    def show
      @experience = Experience.find_by_id(params[:id])
    end


    def create
      if params[:experience][:location_id].empty?
        @experience = Experience.new(user: current_user, story: params[:experience][:story])
        @experience.build_location(experience_params[:location_attributes])
        @experience.save
      else
        @experience = Experience.create(:story => experience_params[:story], :location_id => experience_params[:location_id], :user_id => current_user.id)
      end

      if @experience.valid?
          redirect_to experience_path(@experience)
      else
        # @locations = Location.all
        # render :new
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
        params.require(:experience).permit(:story, :location_id, location_attributes: [:name, :city, :state, :address])
      end


end
