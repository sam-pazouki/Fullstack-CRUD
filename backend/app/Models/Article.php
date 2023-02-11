<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory ; 
    protected $fillable = [
        'login', 'nome', 'cpf', 'e-mail',' endereço', ' senha'
    ];

    protected $table = 'articles';
}
