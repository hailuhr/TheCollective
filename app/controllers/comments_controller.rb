class CommentsController < ApplicationController

  def new
    @location = Location.find_by_id(params[:location_id])
    @comment = Comment.new
  end

  def show
    @comment = Comment.find_by(params[:id])
  end


  def create
    @comment = Comment.new(comment_params)
    @comment.user = current_user
    @comment.save
    redirect_to location_path(@comment.location)
  end


  # def update
  #   @comment = Comment.find_by(params[:id])
  #   @comment.update(comment_params)
  #   @location = Location.find_by_id(@comment.location_id)
  #   redirect_to location_path(@location)
  # end


    private

      def comment_params
        params.require(:comment).permit(:content, :location_id)
      end


end
