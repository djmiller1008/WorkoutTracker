class Api::WorkoutsController < ApplicationController

    def index
        @workouts = current_user.show_workouts(params[:limit])
        render :index
    end

    def create
        @workout = Workout.new(workout_params)
        if @workout.save
            render :show
        else
            render json: ['Invalid Entry'], status: 401
        end
    end

    def show
        @workout = Workout.find_by(id: params[:id])
        if @workout
            render :show
        else
            render json: ['This workout doesn\'t exist!'], status: 401
        end
    end

    def destroy
        workout = Workout.find_by(id: params[:id])
        workout.destroy
        @workouts = current_user.show_workouts(10)
        render :index
    end

    private

    def workout_params
        params.require(:workout).permit(:user_id, :date)
    end


end