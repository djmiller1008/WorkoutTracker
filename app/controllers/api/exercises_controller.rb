class Api::ExercisesController < ApplicationController

    def create
        @exercise = Exercise.new(exercise_params)
        if @exercise.save
            render json: ['Exercise saved']
        else
            render json: @exercise.errors.full_messages, status: 401
        end
    end

    def destroy
    end



    private

    def exercise_params
        params.require(:exercise).permit(:name, :sets, :reps, :weight, :exercise_category_id, :workout_id)
    end

end