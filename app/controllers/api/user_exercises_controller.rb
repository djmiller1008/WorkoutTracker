class Api::UserExercisesController < ApplicationController

    def index
        @user_exercises = current_user.user_exercises
        render :index
    end

    def create
        @user_exercise = UserExercise.new(user_exercise_params)
        if @user_exercise.save
            render :show
        else
            render @user_exercise.errors.full_messages, status: 401
        end
    end

    def destroy
        user_exercise = UserExercise.find_by(id: params[:id])
        user_exercise.destroy
        @user_exercises = current_user.user_exercises
        render :index
    end

    private

    def user_exercise_params
        params.require(:user_exercise).permit(:name, :user_id, :exercise_category_id)
    end


end