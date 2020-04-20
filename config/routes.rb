Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do

    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index] do
      resources :photos, only: [:index]
      resources :albums, only: [:index]
    end
    resources :photos, except: [:new, :edit] do
      resources :comments, only: [:index, :create]
    end
    resources :comments, only: [:destroy]
    resources :albums, only: [:create, :update, :show, :destroy]
    
  end
end
