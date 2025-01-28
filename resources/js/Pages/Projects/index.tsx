import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage, Link} from '@inertiajs/react';
import {useEffect, useState} from 'react';
import {
    Typography,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
    Box,
    Button,
} from '@mui/material';

export default function Dashboard() {
    const [showMessage, setShowMessage] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const {projects} = usePage().props;
    useEffect(() => {

        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 1000);

        const hideTimer = setTimeout(() => {
            setShowMessage(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <AuthenticatedLayout
        >
            <Head title="Dashboard"/>
            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div
                        className="overflow-hidden  shadow-sm sm:rounded-lg bg-gray-50 text-gray-900 dark:bg-black dark:text-white/50">
                        <div className="p-6">
                            {showMessage && (
                                <div
                                    className={`bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative transition-opacity duration-1000 ${
                                        fadeOut ? 'opacity-0' : 'opacity-100'
                                    }`}
                                >
                                    You're logged in!
                                </div>
                            )}
                            <Box sx={{ p: 4 }}>
                                {/* Cabeçalho com título e botão */}
                                <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                                    <Typography variant="h4" component="h1" gutterBottom>
                                        Lista de Projetos
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component={Link}
                                        href="/Projects/create" // Rota para o formulário de criação
                                        sx={{ textTransform: 'none' }}
                                    >
                                        + Adicionar Projeto
                                    </Button>
                                </Box>

                                {/* Lista de Projetos */}
                                {projects && projects.length > 0 ? (
                                    <List sx={{ mt: 2 }}>
                                        {projects.map((project) => (
                                            <Card key={project.id} sx={{ mb: 2, backgroundColor: 'white', boxShadow: 3 }}>
                                                <CardContent>
                                                    <ListItem>
                                                        <ListItemText
                                                            primary={
                                                                <Typography variant="h6" component="span" color="primary">
                                                                    {project.name}
                                                                </Typography>
                                                            }
                                                            secondary={
                                                                project.description || 'Nenhuma descrição disponível'
                                                            }
                                                        />
                                                    </ListItem>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </List>
                                ) : (
                                    <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                                        Nenhum projeto encontrado.
                                    </Typography>
                                )}
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
