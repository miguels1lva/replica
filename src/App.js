import React from "react";


function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('https://beam-images.warnermediacdn.com/2024-07/grid-br-dsk_0.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=2530')] bg-cover bg-center">

<div class=" text-white flex justify-center items-center h-screen m-0 font-sans bg-[url{}] ">
    <div class="bg-[#00008B] p-8 rounded-lg text-center max-w-md w-full">
        <h1 class="text-2xl font-bold mb-2">
            HBO<span class="text-white font-bold"> MAX</span>
        </h1>
        <h2 class="text-base font-normal mb-6">MUITO MAIS A VER</h2>

        

        <input type="email" placeholder="Informe o seu e-mail" class="w-full p-2 mb-4 rounded-md border border-gray-600 bg-[#2a2a2a] text-white" />

        <button class="w-full p-2 bg-white text-black rounded-md font-bold hover:bg-gray-300">
            Continuar
        </button>

        <div class="alternative-login my-5">
            <p>Ou escolha a opção</p>
            <button class="w-full p-2 bg-gray-700 text-white mt-2">Continuar com Google</button>
            <button class="w-full p-2 bg-gray-700 text-white mt-2">Continuar com Facebook</button>
        </div>

        <p>Não tem conta? <a href="#" class="text-[#00bfff] hover:underline">Criar conta</a></p>
    </div>
</div>
    </div>
  );
}

export default App;
