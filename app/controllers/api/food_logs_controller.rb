class Api::FoodLogsController < ApplicationController

    def create
        @food_log = FoodLog.new(food_log_params)
        
        if params[:food_log][:name] == ""
            render json: ['Please pick a food item'], status: 401
        elsif params[:food_log][:servings] == ""
            render json: ['Please enter the number of servings'], status: 401
        else
            food_item = FoodItem.find_by(name: params[:food_log][:name])
            @food_log.food_item_id = food_item.id
            @food_log.calories = food_item.calories * @food_log.servings
            if @food_log.save
                @food_logs = FoodDiary.find_by(id: @food_log.food_diary_id).food_logs
                @nutrient_info = FoodLog.find_nutrient_totals(@food_logs)
                render :index
            else
                render json: @food_log.errors.full_messages, status: 401
            end
        end
    end

    def index
        @food_logs = current_user.food_logs.where(food_diary_id: params[:food_diary_id])
        @nutrient_info = FoodLog.find_nutrient_totals(@food_logs)
        render :index
    end

    private

    def food_log_params
        params.require(:food_log).permit(:food_item_id, :user_id, :servings, :food_diary_id, :name)
    end
end