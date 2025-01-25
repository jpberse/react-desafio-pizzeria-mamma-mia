export const Profile = ({ name, email, password, }) => {
  return (
    <div className="h-screen bg-[#e0e0e0] flex items-center justify-center p-6 space-y-4">
        <section className="w-full max-w-lg pb-4 bg-[#e0e0e0] rounded-lg h-[40%] flex flex-col items-center justify-center text-gray-900" style={{ boxShadow: '15px 15px 30px #bebebe, -15px -15px 30px #ffffff' }}>
            <article className="w-full max-w-md flex flex-col items-start justify-center gap-2">
                <div className='flex flex-col gap-1'>
                    <strong className="block text-lg font-medium">Nombre:</strong>
                    <strong className="block text-lg font-light">{name}</strong>
                    <strong className="block text-lg font-medium">Email:</strong>
                    <strong className="block text-lg font-light">{email}</strong>
                    <strong className="block text-lg font-medium">Password:</strong>
                    <strong className="block text-lg font-light">{password}</strong>
                </div>
                <button className="w-full bg-red-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mb-4" type="submit">Cerrar sesion</button>
            </article> 
        </section>
    </div>
  )
}