import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import React, {FormEventHandler} from 'react';
import ProjectForm from "@/Components/ProjectForm";
import {Project} from "@/types";



export default function Edit({ project } : { project: Project }) {

    const { data, setData, put, errors } = useForm({
        id: project.id ?? '',
        name: project.name ?? '',
        description: project.description ?? '',
        start_date: project.start_date ?? '',
        status: project.status ?? '',
    });

    const handleSubmit : FormEventHandler = (e) => {
        e.preventDefault();

        put(route('projects.update', data));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Editar Projeto" />

            <ProjectForm title={'Editar Projeto'} handleSubmit={handleSubmit} data={data} setData={setData} errors={errors}/>

        </AuthenticatedLayout>
    );
}
