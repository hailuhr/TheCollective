# class SessionsController < ApplicationController
#   request.env['omniauth.auth']
#
#   def create
#     user = User.find_or_create_by(:uid => auth['uid']) do |u|
#       u.name = auth['info']['name']
#       u.email = auth['info']['email']
#     end
#     session[:user_id] = user.id
#   end
#
#   def destory
#     # binding.pry
#     reset_session
#     redirect_to user_session_path
#   end
#
#
#   def auth
#     request.env['omniauth.auth']
#   end
#
#  # ______google login _____
#   # def create
#   #   user = User.from_omniauth(env["omniauth.auth"])
#   #   session[:user_id] = user.id
#   #   redirect_to root_path
#   # end
#   #
#   # def destroy
#   #   session[:user_id] = nil
#   #   redirect_to root_path
#   # end
#
# end
