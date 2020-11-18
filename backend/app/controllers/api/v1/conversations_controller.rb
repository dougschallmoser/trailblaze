class Api::V1::ConversationsController < ApplicationController

  def index
    conversations = Conversation.all
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
    end
  end

  def update
    conversation = Conversation.find_by(id: params[:id])
    conversation.update(conversation_params)   
    render json: conversation 
  end

  def destroy
    conversation = Conversation.find_by(id: params[:id])
    conversation.destroy
  end

  private

  def conversation_params
    params.require(:conversation).permit(:title, :author_id, :receiver_id, :accepted)
  end
end
