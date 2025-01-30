<?php

namespace App\Repositories;
use App\Models\Project;
use Illuminate\Support\Facades\DB;
class ProjectRepository
{
    public function addProject($request) : Project
    {
        try {
            DB::beginTransaction();
            $project = Project::create($request->all());
            DB::commit();
            return $project;
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }
}
