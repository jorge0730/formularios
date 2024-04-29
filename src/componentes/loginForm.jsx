import { useForm } from "react-hook-form";

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const valSubmit = (data) => console.log(data)
    return(
        <>
            <form onSubmit={handleSubmit(valSubmit)}>
              <div className="mb-3">
                <label className="form-label">Usuario</label>
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
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
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
              <div className="d-flex flex-column mt-4">
                <button className="btn btn-primary">Iniciar sesión</button>
              </div>
              
            </form>
        </>
    )
}

export default LoginForm;