class Api::CommentsController < ApplicationController
  
  def index
    @comments = Comment.where(photo_id: params[:photo_id])
  end
  
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.photo_id = params[:photo_id]
    if @comment.save
      render 'api/comments/_comment'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render json: 'success!'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :photo_id, :user_id)
  end
end
