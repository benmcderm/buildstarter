class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
    render :index
  end

  def create
    @project = Project.new(
      name: project_params[:name],
      description: project_params[:description],
      street_address: project_params[:street_address],
      city: project_params[:city],
      state: project_params[:state],
      zip_code: project_params[:zip_code],
      media_url: project_params[:media_url],
      author_id: project_params[:author_id],
      archived: project_params[:archived]
    )
    if @project.save
      render :show
    else
      render json: @project.errors, status: 422
    end
  end

  def show
    @project = Project.find_by_id(params[:id])
    if @project
      render :show
    else
      "Error"
    end
  end

  private

  def project_params
    params.require(:projects).permit(
      :name,
      :description,
      :street_address,
      :city,
      :state,
      :zip_code,
      :media_url,
      :author_id,
      :archived
      )
  end
end
