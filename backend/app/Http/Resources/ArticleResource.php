<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'login' => $this->login,
            'nome' => $this->nome,
            ' cpf' => $this-> cpf,
            'e-mail,' => $this->email,
            'endereço' => $this->endereço,
            'senha' => $this->senha,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
