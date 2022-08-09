class Api::FoodLogsController < ApplicationController

    def create
        @food_log = FoodLog.new(food_log_params)
        if @food_log.save
            @food_logs = FoodDiary.find_by(@food_log.food_diary_id).food_logs
            render :index
        else
            render json: @food_log.errors.full_messages, status: 401
        end
    end

    def index
        
    end



    private

    def food_log_params
        params.require(:food_log).permit(:food_item_id, :user_id, :servings, :food_diary_id)
    end


end