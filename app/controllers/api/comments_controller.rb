class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.photo_id = params[:photo_id]
    
    if @comment.save
      render @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
    else
      render json @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :photo_id, :body)
  end
end
