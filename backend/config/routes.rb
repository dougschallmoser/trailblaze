Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
      resources :users, only: [:create]
      resources :conversations, only: [:index, :create]
      resources :messages, only: [:create]
      post '/search', to: 'users#search'
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      mount ActionCable.server => '/cable'
    end
  end
end
