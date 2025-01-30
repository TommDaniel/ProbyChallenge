<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'start_date',
        'status',
    ];
    protected $casts = [
        'start_date' => 'date',
    ];

    public static function booted()
    {
        self::addGlobalScope( 'ordered', function (Builder $queryBuilder) {
            $queryBuilder->orderBy('name');
        });
    }

    protected function serializeDate(DateTimeInterface $date): string
    {
        return $date->format('Y-m-d');
    }

}
