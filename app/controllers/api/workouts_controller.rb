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
            render json: @workout.errors.full_messages, status: 401
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
        redirect_to action: 'index'
    end

    private

    def workout_params
        params.require(:workout).permit(:user_id, :date)
    end


end