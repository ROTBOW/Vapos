Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 

    resources :users, only: [:show, :create]
    get '/users/:id/games', to: 'users#games'
    get '/users/search/:search', to: 'users#search'
    
    resources :games, only: [ :index, :show ]
    get '/games/images/:images_url', to: 'games#images'

    resources :users_games, only: [:show, :destroy, :create]
    
    resources :cart_items, only: [:show, :create, :destroy]

    resource :session, only: [:create, :destroy]
    
  end
  
end
