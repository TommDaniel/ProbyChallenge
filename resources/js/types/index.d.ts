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
export interface  Project {
    id: number;
    name: string;
    description?: string;
    start_date: string;
    status: 'Pendente' | 'Em Andamento' | 'Concluído';
};
export interface ProjectsMeta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}


export type ProjectsPageProps = PageProps<{
    projects: {
        data: Project[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    mensagemSucesso?: string;
}>;
