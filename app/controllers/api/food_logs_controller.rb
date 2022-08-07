class Api::FoodLogsController < ApplicationController

    def create
        @food_log = FoodLog.new(food_log_params)
    end



    private

    def food_log_params
        params.require(:food_log).permit(:food_item_id, :user_id, :servings, :food_diary_id)
    end


end