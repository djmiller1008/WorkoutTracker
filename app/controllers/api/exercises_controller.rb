class Api::ExercisesController < ApplicationController

    def create
        @exercise = Exercise.new(exercise_params)
        if @exercise.save
            render json: ["Exercise saved"]
        else
            render json: @exercise.errors.full_messages, status: 401
        end
    end

    def index
        @user_exercises = current_user.user_exercises
        @exercises = Exercise.all
        render :index
    end

    private

    def exercise_params
        params.require(:exercise).permit(:name, :exercise_category_id)
    end

end