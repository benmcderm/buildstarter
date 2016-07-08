class Api::InvestmentsController < ApplicationController

    def index
      @investments = Investment.all
      render :index
    end

    def create
      @investment = Investment.new(
        amount: investment_params[:amount],
        user_id: investment_params[:user_id],
        project_id: investment_params[:project_id],
      )
      if @investment.save
        render :show
      else
        render json: @investment.errors, status: 422
      end
    end

    def update
      @investment = Investment.find_by_id(params[:id])
      if @investment.update_attributes(investment_params)
        render :show
      else
        render json: @investment.errors
      end
    end

    def show
      @investment = Investment.find_by_id(params[:id])
      if @investment
        render :show
      else
        render json: @investment.errors
      end
    end

    private

    def investment_params
      params.require(:investment).permit(
        :amount,
        :user_id,
        :project_id
        )
    end

end
