"use client";

// Función para enviar un correo electrónico


export default function SignUpForm() {
    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const name = event.currentTarget.fullName.value;
        const email = event.currentTarget.email.value;
        console.log(`name: ${name}`);
        console.log(`username: ${email}`);
      };


  return (
    <>
    <form onSubmit={handleSignUp} className="mx-auto flex flex-col justify-center">
      <label htmlFor="fullName" className="mb-2">
        Nombre
      </label>
      <input
        type="text"
        id="fullName"
        
        autoComplete="off"
        className="mb-2 rounded-lg border border-gray-600 bg-black p-2.5 text-center text-sm text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500"
      />
      <label htmlFor="email" className="mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        
        autoComplete="off"
        className="mb-2 rounded-lg border border-gray-600 bg-black p-2.5 text-center text-sm text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500"
      />
      <div className="my-4">
        <button type="submit">SIGN UP</button>
      </div>
    </form>
  </>
  );
}
