<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function index(Request $request)
    {
        $projects = Projects::all();
        $mensagemSucesso = session('mensagem.sucesso');

        return view('projects.index')->with('projects', $projects)->with('mensagemSucesso', $mensagemSucesso);
    }

    public function create()
    {
        return view('projects.create');
    }

    public function store(ProjectsFormRequest $request, ProjectsRepository $projectsRepository)
    {
        $projects = $projectsRepository->addProjects($request);


        return to_route('projects.index')->with('mensagem.sucesso', "Projeto '{$projects->name}' cadastrado com sucesso!");
    }

    public function destroy(Projects $projects)
    {
        $projects->delete();

        return to_route('projects.index')->with('mensagem.sucesso', "Projeto '{$projects->name}' removido com sucesso!");
    }

    public function edit(Projects $projects)
    {
        return view('projects.edit')->with('projects', $projects);
    }

    public function update(ProjectsFormRequest $request, Projects $projects)
    {
        $projects->update($request->all());

        return to_route('projects.index')->with('mensagem.sucesso', "Projeto '{$projects->name}' atualizado com sucesso!");
    }
}
