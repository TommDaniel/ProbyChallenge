import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, usePage} from '@inertiajs/react';
import {Alert, Button, Card, CardContent, List, ListItem, ListItemText, Typography} from '@mui/material';
import {ProjectsPageProps} from "@/types";

export default function Dashboard() {
    const {projects, mensagemSucesso} = usePage<ProjectsPageProps>().props;
    return (
        <>
            <AuthenticatedLayout>
                <>
                    {mensagemSucesso && (
                        <Alert severity="success" sx={{mb: 3}}>
                            <>
                                {mensagemSucesso}
                            </>
                        </Alert>
                    )}
                </>
                <Head title="Dashboard"/>
                <div className="py-4">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div
                            className="overflow-hidden shadow-sm sm:rounded-lg bg-gray-50 text-gray-900 dark:bg-black dark:text-white/50">
                            <div className="p-6">
                                {/* Cabeçalho com título e botão */}
                                <div className="flex justify-between items-center mb-4">
                                    <Typography variant="h4" component="h1" gutterBottom>
                                        Lista de Projetos
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component={Link}
                                        href="/Projects/create" // Rota para o formulário de criação
                                        sx={{textTransform: 'none'}}
                                    >
                                        + Adicionar Projeto
                                    </Button>
                                </div>

                                {/* Lista de Projetos */}
                                {projects && projects.length > 0 ? (
                                    <List sx={{mt: 2}}>
                                        {projects.map((project) => (
                                            <Card
                                                key={project.id}
                                                sx={{mb: 2, backgroundColor: 'white', boxShadow: 3}}
                                            >
                                                <CardContent>
                                                    <ListItem>
                                                        <ListItemText
                                                            primary={
                                                                <Typography
                                                                    variant="h6"
                                                                    component="span"
                                                                    color="primary"
                                                                >
                                                                    {project.name}
                                                                </Typography>
                                                            }
                                                            secondary={
                                                                project.description ||
                                                                'Nenhuma descrição disponível'
                                                            }
                                                        />
                                                    </ListItem>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </List>
                                ) : (
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{mt: 2}}
                                    >
                                        Nenhum projeto encontrado.
                                    </Typography>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
