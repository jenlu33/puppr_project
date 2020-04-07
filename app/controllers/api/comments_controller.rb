require 'byebug'
class Api::CommentsController < ApplicationController
  
  def index
    @comments = Comment.all
    render :index
  end

  #def show
  #  @comment = Comment.find(params[:id])
  #  render :show
  #end
  
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    # @comment.photo_id = params[:photo_id]
    debugger
    if @comment.save
      render 'api/comments/_comment'
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
