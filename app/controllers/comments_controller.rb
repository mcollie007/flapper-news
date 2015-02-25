class CommentsController < ApplicationController
	before_filter :authenticate_user!, only: [:create, :upvote]
	
	def create
		#post = Post.find(params[:id])
		comment = post.comments.create(comment_params)
		respond_with post, comment
	end

	def upvote
		comment = post.comments.find(params[:id])
		comment.increment!(:upvotes)

		respond_with post, comment
	end

	private
	def comment_params
		params.require(:comment).permit(:body)
	end
end
