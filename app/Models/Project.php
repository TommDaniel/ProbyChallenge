<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'projects';
    protected $fillable = [
        'name',
        'description',
        'start_date',
        'status',
    ];
    protected $casts = [
        'start_date' => 'date',
    ];
}
