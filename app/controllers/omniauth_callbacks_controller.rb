class OmniauthCallbacksController < Devise::OmniauthCallbacksController

  def facebook
    @user = User.from_omniauth(request.env["omniauth.auth"])
    # binding.pry
    sign_in_and_redirect @user
  end

  def google_oauth2
    @user = User.from_omniauth(request.env["omniauth.auth"])
    binding.pry
    sign_in_and_redirect @user
  end

  def passthru
    render :file => "#{Rails.root}/public/404.html", :status => 404, :layout => false
    # Or alternatively,
    # raise ActionController::RoutingError.new('Not Found')
  end


end
