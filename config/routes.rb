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

  get "user_index" => "experiences#user_index"

  resources :locations, only: [:show, :index, :edit] do
    resources :comments, only: [:show, :create, :new]
  end


end
