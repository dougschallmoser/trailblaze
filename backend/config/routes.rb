Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
      mount ActionCable.server => '/cable'
      post '/search', to: 'users#search'
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      resources :users, only: [:create] do 
        resources :conversations, shallow: true
        resources :favorites, shallow: true
      end
      resources :messages, only: [:create]
    end
  end
end