<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cases extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'expert_id',
        'is_done',
        'user_lat',
        'user_long'
    ];
}
