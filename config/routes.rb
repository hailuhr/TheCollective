Rails.application.routes.draw do

  root :to => "application#home"

  # resources :sessions, only: [:create, :destroy]

  resources :experiences
  resources :locations
  # devise_for :users

  devise_for :users, :controllers => { omniauth_callbacks: "omniauth_callbacks" }
  devise_scope :user do
     get '/users/sign_out' => 'devise/sessions#destroy'
  end

  

  # get '/auth/:provider/callback' => 'sessions#create'
  # get '/auth/facebook' => 'sessions#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "search" => "locations#search"
  get "/locations/all" => "locations#all"


  resources :locations, only: [:show, :index, :edit] do
    resources :comments, only: [:show, :create, :new, :update]
  end


end

#
# GoogleAuthExample::Application.routes.draw do
#   get 'auth/:provider/callback', to: 'sessions#create'
#   get 'auth/failure', to: redirect('/')
#   get 'signout', to: 'sessions#destroy', as: 'signout'
#
#   resources :sessions, only: [:create, :destroy]
#   resource :home, only: [:show]
#
#   root to: "home#show"
# end
