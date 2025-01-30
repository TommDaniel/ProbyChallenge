<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectsFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'required|date|date_format:Y-m-d',
            'status' => 'required|in:Pendente,Em Andamento,Concluído',
        ];
    }
    public function messages(): array
    {
        return [
            'name.required' => 'O nome do projeto é obrigatório.',
            'name.max' => 'O nome do projeto não pode ter mais de 255 caracteres.',
            'description.string' => 'A descrição do projeto deve ser um texto.',
            'start_date.required' => 'A data de início é obrigatória.',
            'start_date.date' => 'A data de início deve ser uma data válida.',
            'start_date.date_format' => 'A data de início deve estar no formato YYYY-MM-DD.',
            'status.required' => 'O status do projeto é obrigatório.',
            'status.in' => 'O status deve ser "Pendente", "Em Andamento" ou "Concluído".',
        ];
    }
}
