class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            render :show
            login!(@user)
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user 
            if current_user.email == "admin@admin.com"
                render json: ["Unauthorized to change admin email"], status: 401
                
            elsif params[:data][:email]
                @user.update_attributes({ email: params[:data][:email] })
                render :show
            end 
        else
            render json: ["User not found"], status: 401
        end
    end

    def update_weight_unit
        @user = current_user
        @user.update_attributes({ weight_unit: params[:data] })
        render :show
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

end