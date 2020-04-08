Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do

    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index] do
      # resources :photos, only: [:index]
      resources :albums, only: [:index]
    end
    resources :photos, except: [:new, :edit] do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create, :destroy]
    resources :albums, only: [:create, :show, :destroy]
    
  end
  
end
