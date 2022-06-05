class Api::ExerciseCategoriesController < ApplicationController 

    def index
        @categories = ExerciseCategory.all 
        render :index
    end

    def show
        @category = ExerciseCategory.find_by(name: params[:id])
        @exercises = @category.exercises
        render :show
    end
    


end

