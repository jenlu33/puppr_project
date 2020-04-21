class Api::TagsController < ApplicationController
  def index
    @tags = Photo.find(params[:photo_id]).tags
  end

  def create
    @tag = Tag.new({name: tag_params[:name]})
    @tag.user_id = current_user.id
    if @tag.save
      PhotoTag.create(photo_id: params[:photo_id], tag_id: @tag.id)
      render 'api/tags/_tag'
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
  end

  private
  def tag_params
    params.require(:tag).permit(:name, :photo_id)
  end
end
