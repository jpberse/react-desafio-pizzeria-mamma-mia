import { useState } from "react";

function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');
    const [confirPw, setConfirmPw] = useState('');
    const [error, setError] = useState(false);
    const [msj, SetMsj] =useState('');

    const validarFormulario = (e) => {
        e.preventDefault();

        if(!email.trim() || !pw.trim() || !name.trim() || !confirPw.trim()) {
            setError(true)
            SetMsj('Debes llenar todos los campos')
            return
        } else if(pw.length < 6) {
            setError(true)
            SetMsj('La contraseña debe tener al menos 6 caracteres')
            return
        } else if(pw !== confirPw) {
            setError(true)
            SetMsj('Las contraseñas no coinciden')
            return
        }
        
        setError(false)
        SetMsj('Usuario Registrado')
    }

    return (
        <div className="h-screen bg-[#e0e0e0] flex items-center justify-center p-6 space-y-4">
            <section className="w-full max-w-lg pb-4 bg-[#e0e0e0] rounded-lg h-[70%] flex flex-col items-center justify-center text-gray-900" style={{ boxShadow: '15px 15px 30px #bebebe, -15px -15px 30px #ffffff' }}>
                <h2 className="text-3xl text-start font-bold leading-tight tracking-tight mb-6">¡Registrate!</h2>
                <form className="w-full max-w-md flex flex-col items-start justify-center" onSubmit={validarFormulario}>
                    <label className="block mb-2 text-lg font-medium">Nombre</label>
                    <input className="bg-gray-50  border border-gray-300 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-4" type="text" name="name" placeholder="Mamma Pizza" onChange={(e) => setName(e.target.value)}/>
                    <label className="block mb-2 text-lg font-medium">Email</label>
                    <input className="bg-gray-50  border border-gray-300 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-4" type="email" name="email" placeholder="shifu@pizza.cl" onChange={(e) => setEmail(e.target.value)}/>
                    <label className="block mb-2 text-lg font-medium">Contraseña</label>
                    <input className="bg-gray-50 border border-gray-300 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-8" type="password" name="confirmPw" placeholder="******" onChange={(e) => setPw(e.target.value)}/>
                    <label className="block mb-2 text-lg font-medium">Confirmar contraseña</label>
                    <input className="bg-gray-50 border border-gray-300 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-8" type="password" name="confirmPw" placeholder="******" onChange={(e) => setConfirmPw(e.target.value)}/>
                    <button className="w-full bg-orange-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mb-4" type="submit">Registrar</button>
                </form> 
                    {error ? <span className="text-red-700 font-medium text-lg text-center underline decoration-2">{msj}</span> : <span className="text-green-600 font-medium text-lg text-center underline decoration-2">{msj}</span>}
            </section>
        </div>
    )
}

export default Register