class ApplicationController < ActionController::Base

  before_action :authenticate_user!

  def after_sign_in_path_for(resource)
    request.env['omniauth.origin'] || root_path
  end

  def home
    # binding.pry

  end


  # ____google login____
  #
  # protect_from_forgery with: :exception
  # helper_method :current_user
  #
  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end


end
