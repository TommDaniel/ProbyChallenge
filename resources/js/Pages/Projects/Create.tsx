import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import React, {FormEventHandler} from 'react';
import ProjectForm from "@/Components/ProjectForm";



export default function Create() {
    // useForm para gerenciar estado e envio.
    const { data, setData, post, errors } = useForm({
        name: '',
        description: '',
        start_date: '',
        status: '',
    });

    // Função para enviar o formulário ao `Projects.store`.
    const handleSubmit : FormEventHandler = (e) => {
        e.preventDefault();

        post(route('projects.store'));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Criar Projeto" />

            <ProjectForm title={'Criar Projeto'} handleSubmit={handleSubmit} data={data} setData={setData} errors={errors}/>

        </AuthenticatedLayout>
    );
}
