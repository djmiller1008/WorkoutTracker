if @user 
    json.extract! @user, :id, :email
end
