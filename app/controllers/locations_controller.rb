class LocationsController < ApplicationController

    def new
      @location = Location.new
    end


    def show
      @location = Location.find_by_id(params[:id])
    end







    def create
      @location = Location.new(location_params)

      if @location.save
        redirect_to location_path(@location)
      else
        render :new
      end
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
      @locations = Location.all.order('created_at DESC')
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


end
