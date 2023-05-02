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

    def destroy
        food_diary = FoodDiary.find_by(id: params[:id])
        food_diary.destroy
    end

    def calorie_data
        data = Hash.new()
        offset = params["offset"].to_i * 7
        diaries = current_user.food_diaries.offset(offset).order('date DESC').limit(7)
        total_calories = 0
        diaries.each do |diary|
            total_calories += FoodLog.where(food_diary_id: diary.id).pluck(:calories).sum
            data[diary.date.strftime("%m/%d/%Y")] = total_calories 
            total_calories = 0
        end
        render json: [data]
    end

    private

    def food_diary_params
        params.require(:food_diary).permit(:user_id, :date, :comment)
    end

end