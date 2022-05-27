class Api::ExercisesController < ApplicationController

    def create
        @exercise = Exercise.new(exercise_params)
        if @exercise.save
            render :show
        else
            render json: @exercise.errors.full_messages, status: 401
        end
    end

    def index
        @exercises = Exercise.all
        render :index
    end

    def show
    end

    def destroy
    end



    private

    def exercise_params
        params.require(:exercise).permit(:name)
    end

end