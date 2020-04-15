require 'byebug'
class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.where(user_id: params[:user_id])
    render :index
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    
    photo_ids = params[:album][:photo_ids]
    # debugger
    if @album.save
      photo_ids.each do |id|
        PhotoAlbum.create(photo_id: id.to_i, album_id: @album.id)
      end
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  
  end

  def update
    @album = Album.find(params[:id])
    if @album.update(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    if @comment.destroy
      # render: index
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private

  def album_params
    params.require(:album).permit(:title, photo_ids:[])
  end
end
