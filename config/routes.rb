Rails.application.routes.draw do
  root to: "root#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :destroy, :update] do
      collection do
        put 'update_weight_unit'
      end
    end
    resource :session, only: [:create, :destroy]
    resources :workouts, only: [:index, :create, :show, :destroy] do
      resources :workout_logs, only: [:index, :create, :show, :destroy, :update]
    end
    resources :exercises, only: [:create, :show, :destroy, :index]
    resources :exercise_categories, only: [:index, :show]
    resources :user_exercises, only: [:create, :show, :destroy, :index]
    resources :food_items, only: [:create, :destroy, :index, :show]
    resources :food_diaries, only: [:create, :destroy, :index, :show] do
      collection do
        get 'calorie_data'
      end
    end
    resources :food_logs, only: [:create, :destroy, :index, :show]
  end
  
end
