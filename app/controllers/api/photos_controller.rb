class Api::PhotosController < ApplicationController
  def index
    @photos = Photos.all
    render "api/photos/index"
  end

  def show
    @photo = Photo.find(params[:id])
    render "api/photos/show"
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    if @photo.save
      render "api/photos/show"
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
