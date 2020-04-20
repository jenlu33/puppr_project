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
    @album = Album.new({title: album_params[:title]})
    @album.user_id = current_user.id
    
    photo_ids = album_params[:photo_ids]
    if photo_ids && !photo_ids.nil? && @album.save
      photo_ids.each do |id|
        AlbumPhoto.create(photo_id: id.to_i, album_id: @album.id)
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
    if @album.destroy
      # render: index
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private

  def album_params
    params.require(:album).permit(:title, :user_id, photo_ids:[])
  end
end
