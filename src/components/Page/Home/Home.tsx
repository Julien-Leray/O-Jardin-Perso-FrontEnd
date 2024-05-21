import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { fetchTutorials} from '../../../store/reducers/tutoriels';
import { fetchFruits, fetchLegumes } from '../../../store/reducers/products';
import { Link } from 'react-router-dom';

interface Tutorials {
  id: number;
  picture: string;
  name: string;
  description: string;
}

const getRandomTutos = (tuto: Tutorials[]): Tutorials[] => {
  if (tuto.length <= 2) return tuto;
  const twoTutoOnHome= [...tuto].sort(() => 0.5 - Math.random());
  return twoTutoOnHome.slice(0, 2);
};

function Home() {

  const dispatch = useAppDispatch();
  const {tuto} = useAppSelector((state) => state.tutoriels);

  const randomTutos = getRandomTutos(tuto);

  const {legumes} = useAppSelector((state) => state.products);

  const { fruits } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchTutorials());
    dispatch(fetchLegumes());
    dispatch(fetchFruits());
  }, [dispatch]);


  // const fruitsFilter = data.filter(product => product.category_id === 1);
  // const vegetablesFilter = data.filter(product => product.category_id === 2);
  
  return (

    
    <div className="bg-white text-center">

      <div className="bg-white text-black py-2 text-sm italic">
      <p>Bienvenue sur notre site web dédié au jardinage!</p>
      </div>

      <div className="md:flex md:justify-around">
      
      <div className="bg-[#16A1AF] py-1 my-2 mx-4 rounded">
              <h2 className="text-base text-black">Fruits </h2>
            <ul className="text-xs flex flex-wrap justify-around rounded bg-white mx-2 w-330 py-2 m-1.5">
            {fruits.map((product)=>(
              <li className= "my-0.5 p-1 border-black border-2 w-5/12  bg-white text-black" key={product.id}>
                {/* <img src={product.picture} alt={`Photo de ${product.name}`}  /> */}
                <h3>{product.name}</h3>
              </li>

            ))}

            </ul> 

            <p className="bg-[#F5780A] text-white rounded-full px-2 w-36 text-sm md:text-base m-auto my-1" >Voir plus</p>

      </div>

          <div className="bg-[#16A1AF] py-1 my-2 mx-4 rounded">
            <h2 className="text-base text-black">Légumes</h2>
            <ul className="text-xs flex flex-wrap justify-around rounded bg-white mx-2 w-330 py-2 m-1.5">
            {legumes.map((product)=>(
              <li className= "my-0.5  p-1 border-black border-2 w-5/12 bg-white text-black" key={product.id}>
                {/* <img src={product.picture} alt={`Photo de ${product.name}`}  /> */}
                <h3>{product.name}</h3>
              </li>

            ))}

            </ul> 

            <p className="bg-[#F5780A] text-white rounded-full px-2 w-36 text-sm md:text-base m-auto my-1" >Voir plus</p>
          
          </div>
      </div>
      <div className="bg-[#16A1AF] py-1 my-2 mx-4 rounded ">

      <h2 className="text-black text-base">Tuto Jardinage</h2>

      <ul className="text-xs rounded py-3 md:flex md:justify-around m-15 flex flex-col items-center">
       {randomTutos.map((tutoriels)=>(
        <li className= "my-0.5 mx-0.5 p-1 text-black m-1.5 w-full" key={tutoriels.id}>
          <img className="p-1" src={tutoriels.picture} alt={`Tuto de ${tutoriels.name}`}  />
          <h3 className=" bg-white p-1">{tutoriels.name}</h3>
          <p className="p-1" >{tutoriels.description}</p>
          <Link
                to={`/tutos/${tutoriels.id}`} className="bg-[#F5780A] rounded-full px-2 w-36 text-sm md:text-base m-auto my-1 text-white" >Lire la suite</Link>
          
        </li>

       ))}
        
      </ul> 
      

      </div>
      
    


    </div>
  );
}

export default Home;