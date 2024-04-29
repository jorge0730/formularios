import { useForm } from "react-hook-form";

const RegistroForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const valSubmit = (data) => console.log(data)

    return(
        <div>
            <h2>Nuevo registro</h2>
                <form onSubmit={handleSubmit(valSubmit)}>
                <div>
                    <label>Nombres</label>
                    <input type="text" className="form-control" {...register("nombres")}></input>
                </div>
                <div>
                    <label>Apellidos</label>
                    <input type="text" className="form-control" {...register("apellidos")}></input>
                </div>
                <div>
                    <label>Correo</label>
                    <input className="form-control" {...register("correo",{
                  required:{
                    value: true,
                    message:'El correo es obligatorio',
                },
                  pattern:{
                    value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:'Correo con formato invalido'
                  }
                })}/>
                {errors.correo && <span>{errors.correo.message}</span>}
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" className="form-control" {...register("contraseña", {
                    required: {
                      value: true,
                      message:'La contraseña es obligatoria',
                    },
                    pattern:{
                      value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
                      message:'La constraseña es invalida'
                    }})}/>
                    {errors.contraseña && <span className="" role="alert">{errors.contraseña.message}</span>}
                </div>
                <div>
                    <label>Dirección</label>
                    <input type="text" className="form-control" {...register("direccion")}></input>
                </div>
                <div>
                    <label>Celular</label>
                    <input type="text" className="form-control" {...register("celular")}></input>
                </div>
                <div>
                    <label>País</label>
                    <select className="form-control" {...register("pais")}>
                        <option value="es">España</option>
                        <option value="col">Colombia</option>
                        <option value="pe">Perú</option>
                        <option value="us">Estados Unidos</option>
                    </select>
                </div>
                <div className="d-flex flex-column mt-4">
                    <button  type="submit" value="enviar" className="btn btn-primary">ENVIAR</button>
              </div>
            </form>  
        </div>
    )
}

export default RegistroForm;