class Api::V1::ConversationsController < ApplicationController
  before_action :require_login
  before_action :set_user, only: [:index]
  before_action :authorize, only: [:index]

  def index
    conversations = Conversation.by_user(params[:user_id])
    render json: conversations
  end

  def create
    conversation = Conversation.new(conversation_params)
    if conversation.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        ConversationSerializer.new(conversation)
        ).serializable_hash
        ActionCable.server.broadcast 'conversations_channel', serialized_data
        head :ok
    else 
      render json: { error: conversation.errors.full_messages }, status: :not_acceptable
    end
  end

  def update
    conversation = Conversation.find_by(id: params[:id])
    if conversation.update(conversation_params)   
      render json: conversation 
    else 
      render json: { error: conversation.errors.full_messages }, status: :not_acceptable
    end
  end

  def destroy
    conversation = Conversation.find_by(id: params[:id])
    conversation.destroy
    if !conversation.destroyed?
      render json: { error: 'An error occured when deleting' }
    else 
      render json: { success: 'success' }
    end
  end

  private

  def set_user
    @user = User.find_by(id: params[:user_id])
  end

  def conversation_params
    params.require(:conversation).permit(:title, :author_id, :receiver_id, :accepted)
  end
end
