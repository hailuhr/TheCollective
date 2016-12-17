class LocationsController < ApplicationController

    def new
      @location = Location.new
    end


    def show
      @location = Location.find_by_id(params[:id])
      # respond_to do |format|
      #   # format.html { render :show }
      #   format.json { render json: @location}
      # end
      # render :show
      render json: @location
    end


    def create
      # binding.pry
      # @location = Location.new(location_params)
      @location = Location.create(location_aj)

      # if @location.save
        # redirect_to location_path(@location)
        render json: @location
      # else
      #   render :new
      # end
    end


    def edit
      @location = Location.find_by_id(params[:id])
    end


    def update
      @location = Location.find(params[:id])
      @location.update(location_params)
      redirect_to location_path(@location)
    end

    def all
      @all_locations = Location.all
      render :"/locations/all"
    end


    def index
      @locations = Location.all
      respond_to do |format|
        format.json { render json: @locations }
        format.html { render :index }
      end
      # render json: @locations
    end


    def search
      if params[:search]
        if !(Location.search(params[:search]).nil?) && !(Location.search(params[:search]).empty?)
          @experiences = Location.search(params[:search])
        else
          @none_found = "none"
        end
      end
    end


    private

      def location_params
        params.require(:location).permit(:name, :city, :state, :address)
      end

      def location_aj
        params.permit(:name, :city, :state, :address)
      end


end
