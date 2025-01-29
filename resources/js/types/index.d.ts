export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
export type Project = {
    id: number;
    name: string;
    description?: string;
    start_date: string;
    status: 'Pendente' | 'Em Andamento' | 'Concluído';
};

export type ProjectsPageProps = PageProps<{
    projects: Project[];
    mensagemSucesso?: string;
}>;
