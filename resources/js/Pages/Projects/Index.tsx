import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { ProjectsPageProps } from '@/types';
import {useEffect, useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Dashboard() {
    const { projects, mensagemSucesso } = usePage<ProjectsPageProps>().props;

    // Controla qual projeto terá os detalhes exibidos
    const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

    // Form para exclusão de projetos
    const { delete: destroy } = useForm();

    //Controla a exibição da mensagem
    const [showSuccessMessage, setShowSuccessMessage] = useState(!!mensagemSucesso);

    useEffect(() => {
        if (mensagemSucesso) {
            const timer = setTimeout(() => setShowSuccessMessage(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [mensagemSucesso]);

    // Alterna o projeto cujo detalhes serão exibidos
    const toggleProjectDetails = (projectId: number) => {
        setExpandedProjectId(current => (current === projectId ? null : projectId));
    };

    // Lógica de exclusão
    const handleDelete = (projectId: number, projectName: string) => {
        if (confirm(`Deseja realmente excluir o projeto "${projectName}"?`)) {

            destroy(route('projects.destroy', projectId));
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="p-4">
                {/* Alerta de sucesso */}
                {showSuccessMessage && (
                    <div
                        className={`mb-4 border border-green-300 bg-green-50 text-green-700 p-3 rounded
                                    transition-opacity duration-1000 ease-out ${showSuccessMessage ? 'opacity-100' : 'opacity-0'}
                        `}
                    >
                        {mensagemSucesso}
                    </div>
                )}

                <div className="bg-white dark:bg-gray-800 shadow-sm rounded p-6">
                    {/* Cabeçalho com Título e Botão "Adicionar Projeto" */}
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            Lista de Projetos
                        </h1>

                        <Link
                            href={route('projects.create')}
                            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full
                                       transition-transform duration-150 hover:scale-110"
                        >
                            +
                        </Link>
                    </div>

                    {/* Lista de Projetos */}
                    {projects && projects.length > 0 ? (
                        <ul className="space-y-4">
                            {projects.map((project) => (
                                <li
                                    key={project.id}
                                    className="
                                        bg-gray-50 dark:bg-gray-700
                                        border border-gray-200 dark:border-gray-600
                                        rounded-lg shadow-sm p-4
                                        hover:shadow-md transition-shadow duration-200
                                        hover:bg-gray-100 dark:hover:bg-gray-600
                                    "
                                >
                                    <div className="flex items-center justify-between">
                                        {/* Nome do projeto */}
                                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                            {project.name}
                                        </h2>

                                        {/* Ações (Expandir, Editar, Excluir) */}
                                        <div className="flex items-center space-x-3">
                                            {/* Botão para exibir/ocultar detalhes */}
                                            <button
                                                onClick={() => toggleProjectDetails(project.id)}
                                                className="text-gray-600 hover:text-gray-800 dark:text-gray-300
                                                           dark:hover:text-gray-200 transition-colors duration-200"
                                                title={
                                                    expandedProjectId === project.id
                                                        ? 'Ocultar detalhes'
                                                        : 'Mostrar detalhes'
                                                }
                                            >
                                                <ExpandMoreIcon
                                                    className={`transform transition-transform duration-300 ${
                                                        expandedProjectId === project.id
                                                            ? 'rotate-180'
                                                            : ''
                                                    }`}
                                                />
                                            </button>

                                            {/* Editar (Link) */}
                                            <Link
                                                href={route('projects.edit', project.id)}
                                                title="Editar Projeto"
                                                className="text-gray-600 hover:text-blue-600 dark:text-gray-300
                                                           dark:hover:text-blue-400 transition-colors duration-200"
                                            >
                                                <EditIcon />
                                            </Link>

                                            {/* Excluir (action) */}
                                            <button
                                                onClick={() => handleDelete(project.id, project.name)}
                                                title="Excluir Projeto"
                                                className="text-gray-600 hover:text-red-600 dark:text-gray-300
                                                           dark:hover:text-red-400 transition-colors duration-200"
                                            >
                                                <DeleteIcon />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Detalhes do Projeto (exibidos se expandedProjectId === project.id) */}
                                    <div
                                        className={`mt-3 transition-all duration-300 ease-in-out
                                            ${
                                            expandedProjectId === project.id
                                                ? 'opacity-100 max-h-[500px]'
                                                : 'opacity-0 max-h-0'
                                        }
                                            overflow-hidden
                                        `}
                                    >
                                        <div className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                                            <p>
                                                <span className="font-medium">Descrição:</span>{' '}
                                                {project.description || 'Nenhuma descrição disponível'}
                                            </p>
                                            <p>
                                                <span className="font-medium">Data de início:</span>{' '}
                                                {project.start_date}
                                            </p>
                                            <p>
                                                <span className="font-medium">Status:</span>{' '}
                                                {project.status}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700 dark:text-gray-300">
                            Nenhum projeto encontrado.
                        </p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
