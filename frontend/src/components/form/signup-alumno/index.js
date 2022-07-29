import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useUser } from 'hooks/useUser'
import { useProvincias } from 'hooks/useProvincias'

import { Input, InputDatePicker } from 'components/input'
import { ButtonSubmit } from 'components/button'
import Select from 'components/select'

import "react-datepicker/dist/react-datepicker.css";

const MySwal = withReactContent(Swal)

export default function FormSignupAlumno() {
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
        reset
    } = useForm()
    const { postUser } = useUser()
    const { provincias } = useProvincias()

    const submitEvent = async (data) => {
        const {
            username,
            nombres,
            apellido_paterno,
            apellido_materno,
            contraseña,
            confirmar_contraseña,
            correo,
            provincia,
            fecha_nacimiento,
            telefono,
            sexo,
            // mensualidad, 
        } = data

        if (contraseña !== confirmar_contraseña) {
            MySwal.fire({
                title: "Las contraseñas no coinciden",
                icon: "error",
                showConfirmButton: false,
                timer: 2000,
                padding: '3em'
            })
            return
        }

        await postUser({
            username,
            password: contraseña,
            nombres,
            apellidoPaterno: apellido_paterno,
            apellidoMaterno: apellido_materno,
            correo,
            provincia,
            fechaNacimiento: fecha_nacimiento,
            telefono,
            sexo
        })
        MySwal.fire({
            title: "Registrado satisfactoriamente",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
            padding: '3em'
        })
        reset()
    }

    return (
        <div id="form__wrap-signup">
            <form className="form" onSubmit={handleSubmit(submitEvent)}>
                <Input
                    errors={errors}
                    name="username"
                    register={register}
                    style='light'
                />
                <Input
                    errors={errors}
                    name="nombres"
                    register={register}
                    style='light'
                />
                <Input
                    errors={errors}
                    name="apellido_paterno"
                    register={register}
                    style='light'
                />
                <Input
                    errors={errors}
                    name="apellido_materno"
                    register={register}
                    style='light'
                />
                <Input
                    errors={errors}
                    name="contraseña"
                    register={register}
                    type="password"
                    style='light'
                />
                <Input
                    errors={errors}
                    name="confirmar_contraseña"
                    register={register}
                    type="password"
                    style='light'
                />
                <Input
                    errors={errors}
                    name="correo"
                    register={register}
                    style='light'
                />
                <Select
                    errors={errors}
                    name="provincia"
                    register={register}
                    style='light'
                    options={provincias.map(({ nombre }) => nombre)}
                />
                <InputDatePicker
                    name='fecha_nacimiento'
                    errors={errors}
                    register={register}
                    type='light'
                    control={control}
                />
                <Input
                    errors={errors}
                    name="telefono"
                    register={register}
                    style='light'
                />
                <Select
                    errors={errors}
                    name="sexo"
                    register={register}
                    style='light'
                    options={['Masculino', 'Femenino']}
                />
                {/* <Input
                    errors={errors}
                    name="mensualidad"
                    register={register}
                    style='light'
                /> */}
                <div className="form__button-submit">
                    <ButtonSubmit
                        message="Registrarse"
                        type="purple"
                    />
                </div>
            </form>
        </div>
    )
}
