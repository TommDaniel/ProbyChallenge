<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'name',
        'description',
        'start_date',
        'status',
    ];
    protected $casts = [
        'start_date' => 'date',
    ];
    protected function serializeDate(DateTimeInterface $date): string
    {
        return $date->format('Y-m-d');
    }

}
