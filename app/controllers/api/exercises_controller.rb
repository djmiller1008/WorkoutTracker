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
        @workout = Workout.find_by(id: params[:workout_id])
        if @workout 
            @exercises = @workout.exercises
            render :index
        else
            render json: ['No exercises yet']
        end
    end

    def show
    end

    def destroy
    end



    private

    def exercise_params
        params.require(:exercise).permit(:name, :sets, :reps, :weight, :exercise_category_id, :workout_id)
    end

end