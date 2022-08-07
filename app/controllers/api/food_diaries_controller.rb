class Api::FoodDiariesController < ApplicationController

    def index
        @food_diaries = current_user.show_food_diaries(params[:limit])
        render :index
    end

    def create
        @food_diary = FoodDiary.new(food_diary_params)
        if @food_diary.save
            render :show
        else
            render json: ['You must pick a valid date!'], status: 401
        end
    end

    def show
        @food_diary = FoodDiary.find_by(id: params[:id])
        if @food_diary
            render :show
        else
            render json: ['This food diary doesn\'t exist!'], status: 401
        end
    end

    private

    def food_diary_params
        params.require(:food_diary).permit(:user_id, :date, :comment)
    end

end