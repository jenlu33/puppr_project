
class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
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
  end

  private
  
  def photo_params
    params.require(:photo).permit(:title, :caption)
  end
end
