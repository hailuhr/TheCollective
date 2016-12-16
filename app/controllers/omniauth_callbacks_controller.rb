class OmniauthCallbacksController < Devise::OmniauthCallbacksController

  # def facebook
  #   @user = User.from_omniauth(request.env["omniauth.auth"])
  #   # binding.pry
  #   sign_in_and_redirect @user
  # end


  def google_oauth2
    # binding.pry
    @user = User.from_omniauth(request.env["omniauth.auth"])
    sign_in_and_redirect @user
  end

  def passthru
    render :file => "#{Rails.root}/public/404.html", :status => 404, :layout => false
    # Or alternatively,
    # raise ActionController::RoutingError.new('Not Found')
  end




  # _____google oauth opt 2 ____
  # def google_oauth2
  #    # You need to implement the method below in your model (e.g. app/models/user.rb)
  #    @user = User.from_omniauth(request.env["omniauth.auth"])
  #
  #    if @user.persisted?
  #      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "Google"
  #      sign_in_and_redirect @user, :event => :authentication
  #    else
  #      session["devise.google_data"] = request.env["omniauth.auth"]
  #      redirect_to new_user_registration_url
  #    end
  #  end


end
