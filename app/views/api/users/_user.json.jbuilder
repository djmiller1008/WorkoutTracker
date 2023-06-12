if @user 
    json.extract! @user, :id, :email, :weight_unit
end
