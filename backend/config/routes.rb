Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
      post '/search', to: 'users#search'
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      mount ActionCable.server => '/cable'
      resources :users, only: [:create] do 
        resources :conversations, shallow: true
      end
      resources :messages, only: [:create]
      resources :favorites, only: [:index, :create, :destroy]
    end
  end
end