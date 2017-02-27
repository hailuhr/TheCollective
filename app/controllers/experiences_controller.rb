class ExperiencesController < ApplicationController

    def index
      @experiences = Experience.all

      respond_to do |format|
        format.json { render json: @experiences}
        format.html { render :index }
      end
    end


    def user_index
      @experiences = current_user.experiences

      respond_to do |format|
        format.json { render json: @experiences}
        format.html { render :user_index }
      end
    end


    def new
      @experience = Experience.new
      @experience.build_location
      @locations = Location.all
    end


    def show
      @experience = Experience.find_by_id(params[:id])
    end


    def create
      if params[:experience][:location_id].empty?
        @experience = Experience.create(experience_params)
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
          params.require(:experience).permit(:story, :user_id, :location_id, location_attributes: [:name, :city, :country, :zipcode, :address])
      end


end
