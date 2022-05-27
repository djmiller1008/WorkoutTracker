class Api::WorkoutLogsController < ApplicationController

    def index
        @workout_logs = WorkoutLog.where(workout_id: params[:workout_id])
        render :index
    end

    def create
        @workout_log = WorkoutLog.new(workout_log_params)
       
        @workout_log.exercise_id = Exercise.find_by(name: params[:workout_log][:name]).id
        
        if @workout_log.save
            render :show
        else
            render @workout_log.errors.full_messages, status: 401
        end
    end

    def show
    
    end



    private

    def workout_log_params
        params.require(:workout_log).permit(:workout_id, :reps, :weight,
                                            :weight_unit, :user_id,
                                            :rep_unit, :name)
    end


end
