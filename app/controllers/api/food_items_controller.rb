class Api::FoodItemsController < ApplicationController

    def index
        @food_items = current_user.food_items
        render :index
    end

    def create
        @food_item = FoodItem.new(food_item_params)
        if @food_item.save
            render :index
        else
            render json: ["Invalid Entry"], status: 401
        end
    end

    def show
        @food_item = FoodItem.find_by(id: params[:id])
        render :show
    end

    def destroy
    end

    private

    def food_item_params
        params.require(:food_item).permit(:user_id, :name, :calories, :fat, :protein, :carbohydrates)
    end

end