Rails.application.routes.draw do
  root to: "root#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :destroy]
    resource :session, only: [:create, :destroy]
    resources :workouts, only: [:index, :create, :show, :destroy]
    resources :exercises, only: [:create, :destroy]
  end
  
end
