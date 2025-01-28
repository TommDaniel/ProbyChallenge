<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectsFormRequest;
use App\Models\Project;
use App\Repositories\ProjectRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function index(Request $request)
    {
        $projects = Project::all();
        $mensagemSucesso = session('mensagem.sucesso');

        return Inertia::render('Projects/index', [
            'projects' => $projects,
            'mensagemSucesso' => $mensagemSucesso,
            'Head'=> 'Dashboard',
        ]);
    }

    public function create()
    {
        return Inertia::render('Projects/Create');
    }

    public function store(ProjectsFormRequest $request, ProjectRepository $projectsRepository)
    {
        $project = $projectsRepository->addProject($request);


        return to_route('projects.index')->with('mensagem.sucesso', "Projeto '{$project->name}' cadastrado com sucesso!");
    }

    public function destroy(Project $project)
    {
        $project->delete();

        return to_route('projects.index')->with('mensagem.sucesso', "Projeto '{$project->name}' removido com sucesso!");
    }

    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', [
            'project' => $project,
        ]);
    }

    public function update(ProjectsFormRequest $request, Project $project)
    {
        $project->update($request->all());

        return to_route('projects.index')->with('mensagem.sucesso', "Projeto '{$project->name}' atualizado com sucesso!");
    }
}
