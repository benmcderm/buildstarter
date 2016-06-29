class ProjectsController < ApplicationController

  def create
    @project = Project.new(project_params)

    if @project.save
      render "api/projects/show"
    else
      render json: @project.errors, status: 422
    end
  end

  def show
  end

  private

  def project_params
    params.require(:projects).permit(
      name:,
      description:,
      street_address:,
      city:,
      state:,
      zip_code:,
      media_url:,
      author_id:,
      archived:
      )
  end
end
