Rails.application.routes.draw do

  root :to => "application#home"


  resources :experiences
  resources :locations


  devise_for :users, :controllers => { omniauth_callbacks: "omniauth_callbacks" }


  devise_scope :user do
     get '/users/sign_out' => 'devise/sessions#destroy'
  end

  resources :user

  get "search" => "locations#search"

  get "/locations/all" => "locations#all"


  resources :locations, only: [:show, :index, :edit] do
    resources :comments, only: [:show, :create, :new]
  end

  get "/locations/list" => "locations#locations_list"

end
