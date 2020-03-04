class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else 
      render plain: "invalid username or password"
    end
  end

  def destroy
    logout
    if !logged_in?
      render json: {}
    else 
      render plain: 'unable to logout', status: 404
      # debugger
    end
  end

end
