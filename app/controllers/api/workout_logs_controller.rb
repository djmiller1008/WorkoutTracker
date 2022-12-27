class Api::WorkoutLogsController < ApplicationController

    def index
        @workout_logs = WorkoutLog.where(workout_id: params[:workout_id])
        render :index
    end

    def create
        @workout_log = WorkoutLog.new(workout_log_params)
        
        if Exercise.find_by(name: params[:workout_log][:name]).nil?
            @workout_log.user_exercise_id = UserExercise.find_by(name: params[:workout_log][:name]).id
        else
            @workout_log.exercise_id = Exercise.find_by(name: params[:workout_log][:name]).id
        end
       
        if @workout_log.save
            render :show
        else
            render json: @workout_log.errors.full_messages, status: 401
        end
    end

    private

    def workout_log_params
        params.require(:workout_log).permit(:workout_id, :reps, :weight,
                                            :weight_unit, :user_id,
                                            :rep_unit, :name)
    end
end
