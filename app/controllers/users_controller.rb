class UsersController < ApplicationController

    def new
      @user = User.new
    end


    def create
      @user = User.create(user_params)
      if @user.save && @user.authenticate(user_params[:password])
        session[:user_id] = @user.id
        redirect_to '/'
      else
        redirect_to '/signup'
      end
    end



    def show
      @user = User.find_by_id(params[:id])
      @locations = @user.locations.uniq
    end



    private

      def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
      end


end
