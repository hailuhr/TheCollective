class LocationsController < ApplicationController

    def geocode
      locations = Location.geocoded
      @location_latitudes = locations.map{ |l| {lng: l.longitude, lat: l.latitude} }
      render json: @location_latitudes
    end

    def new
      @location = Location.new
    end


    def show
      @location = Location.find_by_id(params[:id])
      respond_to do |format|
        format.json { render json: @location}
        format.html { render :show }
      end
    end


    def create
      # binding.pry
      @location = Location.new(location_params)
       @location.save
      if @location.valid?
        render :home
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


    def index
      @locations = Location.all
      respond_to do |format|
        format.json { render json: @locations }
        format.html { render :index }
      end
    end


    def search
      if params[:search]
        if !(Location.search(params[:search]).nil?) && !(Location.search(params[:search]).empty?)
          @response = Location.search(params[:search])

          render json: @response
        else
          render plain: "No experiences found"
        end
      end
    end


    private

      def location_params
        params.require(:location).permit(:search, :name, :city, :address, :zipcode, :country)
      end


end
