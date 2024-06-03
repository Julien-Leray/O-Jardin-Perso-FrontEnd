import React from 'react';
import { User, Lock, XCircle } from 'react-feather';

function Contact() {
  return (
    <div>
      <h1 className="text-xl text-center font-bold p-2">Contact</h1>
      <h2 className="text-xl text-center p-2">Formulaire de contact</h2>
      <form className="px-2 md:p-2 md:mx-20" autoComplete="off">
      <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
          >
            Votre email :
          </label>
          <div className="flex items-center mb-4 md:mb-8">
            <User className="absolute ml-3 " />
            <input
              required
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              placeholder="Email"
              className="bg-white text-gray-900 border-1text-sm rounded-full focus:ring-[#F6D50E] w-full ps-12 p-4 border border-black "
            />
          </div>
          <label
            htmlFor="contact"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre demande
          </label>
          <div className="flex items-center md:mb-1">
          <textarea
              required
              name="contatc"
              // value={formData.email}
              // onChange={handleChange}
              placeholder="Écrivez votre message"
              rows={8}
              className="bg-white text-gray-900 border-1 border-black text-sm rounded focus:ring-[#F6D50E] w-full p-4 border"
            />
          </div>
      </form>

          <button
            type="button"
            className="mx-auto py-4 px-20 md:px-64 flex m-2 bg-[#F6D50E] hover:text-white rounded-full hover:bg-black focus:ring-1 focus:ring-[#F6D50E]"
          >
            Envoyer
          </button>

          <h2 className="text-xl text-center p-2 font-bold  ">FAQ</h2>
          <div className='md:mx-20 mx-2 text-sm md:text-m'>
          <p className='text-center italic font-semibold'>Comment faire pour ajouter un produit en favoris ?</p>
          <p className='py-1 text-justify'></p>
          
          <p className='text-center italic font-semibold'>Et il possible d'enregistrer des favoris sans être inscrit ?</p>
          <p className='py-1 text-justify'></p>

          <div className='flex flex-col rounded-lg overflow-hidden shadow-lg border border-gray-200 p-2 m-2'>
          <p className='text-center italic font-semibold '>Comment faire pour ajouter un produit que l'on ne trouve pas?</p>
          <p className='py-1 text-justify'>Si vous souhaitez ajouter un produit qui n'existe pas dans notre bibliothéque de fruits et légumes, vous avez la 
          possibilité de faire une demande d'ajout de produit via le formulaire de contact. Nous ferons en sorte de l'ajouter rapidement avec toutes les informations
          nécessaire au bon déroulement de votre plantation. </p>
          </div>
          </div>
    </div>
  );
}

export default Contact;
