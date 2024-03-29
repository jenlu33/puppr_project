
class Api::PhotosController < ApplicationController
  def index
    if params[:user_id]
      @photos = Photo.where(user_id: params[:user_id])
    # elsif params[:tag_id]
    #   @photos = Photo.find(params[:tag_id])
    else
      @photos = Photo.all
    end
    render :index
  end

  def show
    @photo = Photo.with_attached_photo.find(params[:id])
    render :show
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
    @photo = Photo.with_attached_photo.find(params[:id])
    if @photo.destroy
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  private
  
  def photo_params
    params.require(:photo).permit(:title, :caption, :photo)
  end
end
