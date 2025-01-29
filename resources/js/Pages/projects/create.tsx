import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import {
    TextField,
    MenuItem,
    Button,
    FormHelperText,
} from '@mui/material';
import React, {FormEventHandler} from 'react';

const statusOptions = ['Pendente', 'Em Andamento', 'Concluído'];

export default function Create() {
    // useForm para gerenciar estado e envio.
    const { data, setData, post, errors } = useForm({
        name: '',
        description: '',
        start_date: '',
        status: '',
    });

    // Função para enviar o formulário ao `projects.store`.
    const handleSubmit : FormEventHandler = (e) => {
        e.preventDefault();

        post(route('projects.store'));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Criar Projeto" />


            <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-lg rounded shadow-md bg-white dark:bg-gray-800 p-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
                        Criar Projeto
                    </h1>

                    {/* Formulário Inertia (via onSubmit) */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <TextField
                                required
                                label="Nome do Projeto"
                                variant="outlined"
                                fullWidth
                                inputProps={{ maxLength: 255 }}
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                InputLabelProps={{ className: 'dark:text-gray-300' }}
                                InputProps={{
                                    className:
                                        'dark:text-gray-100 dark:bg-gray-700 dark:border-gray-600',
                                }}
                            />
                            {errors.name && (
                                <FormHelperText error>{errors.name}</FormHelperText>
                            )}
                        </div>
                        <div>
                            <TextField
                                label="Descrição"
                                variant="outlined"
                                multiline
                                rows={4}
                                fullWidth
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                InputLabelProps={{ className: 'dark:text-gray-300' }}
                                InputProps={{
                                    className:
                                        'dark:text-gray-100 dark:bg-gray-700 dark:border-gray-600',
                                }}
                            />
                            {errors.description && (
                                <FormHelperText error>{errors.description}</FormHelperText>
                            )}
                        </div>
                        <div>
                            <TextField
                                required
                                label="Data de Início"
                                type="date"
                                variant="outlined"
                                fullWidth
                                value={data.start_date}
                                onChange={(e) => setData('start_date', e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                    className: 'dark:text-gray-300',
                                }}
                                InputProps={{
                                    className:
                                        'dark:text-gray-100 dark:bg-gray-700 dark:border-gray-600',
                                }}
                            />
                            {errors.start_date && (
                                <FormHelperText error>{errors.start_date}</FormHelperText>
                            )}
                        </div>
                        <div>
                            <TextField
                                required
                                label="Status"
                                select
                                variant="outlined"
                                fullWidth
                                value={data.status}
                                onChange={(e) => setData('status', e.target.value)}
                                InputLabelProps={{ className: 'dark:text-gray-300' }}
                                InputProps={{
                                    className:
                                        'dark:text-gray-100 dark:bg-gray-700 dark:border-gray-600',
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Selecione um status
                                </MenuItem>
                                {statusOptions.map((status) => (
                                    <MenuItem
                                        key={status}
                                        value={status}

                                    >
                                        {status}
                                    </MenuItem>
                                ))}
                            </TextField>
                            {errors.status && (
                                <FormHelperText error>{errors.status}</FormHelperText>
                            )}
                        </div>
                        <div className="flex justify-center mt-6">
                            <Button
                                type="submit"
                                variant="contained"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold
                           px-4 py-2 rounded-full transition-transform duration-150 hover:scale-105"
                            >
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
