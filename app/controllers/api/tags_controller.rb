class Api::TagsController < ApplicationController
  def index
    @tags = Tag.where(photo_id: params[:photo_id])
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end
end
