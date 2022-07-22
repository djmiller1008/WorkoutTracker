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

        if current_user.email == "admin@admin.com"
            render json: ["Unauthorized to change admin email"], status: 401

        elsif params[:data][:email]
            if current_user.email == "admin@admin.com"
                render json: ["Unauthorized to change admin email"], status: 401
            end

            if @user.update_attributes({ email: params[:data][:email] })
                render :show
            else
                render json: @user.errors.full_messages, status: 422
            end
        elsif params[:data][:password]

        end
     
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

end