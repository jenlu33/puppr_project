class Api::AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    
    if @album.save
      render "api/albums/show"
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private
  def album_params
    params.require(:album).permit(:name)
  end
end
