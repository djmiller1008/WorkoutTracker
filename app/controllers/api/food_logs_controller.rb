class Api::FoodLogsController < ApplicationController

    def create
        @food_log = FoodLog.new(food_log_params)
        food_item_id = FoodItem.find_by(name: params[:food_log][:name]).id
        @food_log.food_item_id = food_item_id
        if @food_log.save
            @food_logs = FoodDiary.find_by(id: @food_log.food_diary_id).food_logs
            render :index
        else
            render json: @food_log.errors.full_messages, status: 401
        end
    end

    def index
        
    end



    private

    def food_log_params
        params.require(:food_log).permit(:food_item_id, :user_id, :servings, :food_diary_id, :name)
    end


end