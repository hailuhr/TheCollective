Rails.application.routes.draw do

  root :to => "application#home"

  get "locations/geocode" => "locations#geocode"

  get "search" => "locations#search"
  # get "locations/search" => "locations#search"


  resources :experiences
  resources :locations


  devise_for :users, :controllers => { omniauth_callbacks: "omniauth_callbacks" }

  devise_scope :user do
     get '/users/sign_out' => 'devise/sessions#destroy'
  end

  resources :user



  resources :locations, only: [:show, :index, :edit] do
    resources :comments, only: [:show, :create, :new]
  end



  get "user_experiences" => "experiences#user_index"


end
