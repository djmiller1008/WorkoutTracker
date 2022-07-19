class Api::ExerciseCategoriesController < ApplicationController 

    def index
        @categories = ExerciseCategory.all 
        render :index
    end

    def show
        @category = ExerciseCategory.find_by(name: params[:id])
        @exercises = @category.exercises
        @user_exercises = current_user.user_exercises.where(exercise_category_id: @category.id)
        render :show
    end
    


end

