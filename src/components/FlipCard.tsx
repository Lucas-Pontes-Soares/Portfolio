import React, { useState } from 'react';
import classNames from 'classnames';
import '../css/FlipCard.css';

interface FlipCardProps {
  frontImage: string;
  title: string;
  subtitle: string;
  description: string;
  github: string,
  site: string,
  instagram: string,
}

export const FlipCard: React.FC<FlipCardProps> = ({ title, frontImage, description, subtitle, github, site, instagram }) => {
    const [isFlipped, setFlipped] = useState(false);

    const handleCardFlip = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div
            className={classNames('flip-card', { 'flipped': isFlipped })}
            onClick={handleCardFlip}
        >
            <div className="flip-card-inner rounded-md">
                <div className="flip-card-front rounded-md">
                <h1 className='text-center text-3xl pb-2 font-itim'>{title}</h1>
                    <img src={frontImage} alt="Imagem do Card" className="w-full h-full object-cover rounded-2xl"/>
                </div>
                <div className="flip-card-back bg-gray-700 rounded-2xl">
                    <h1 className='text-center text-3xl pb-2 font-itim'>{title}</h1>
                    <h2 className="text-center text-2xl font-Julius pb-5">{subtitle}</h2>

                    <p className='font-itim pl-3 pr-3 pb-8'>{description}</p>

                    {github != "" || site != "" || instagram != "" ? (
                         <div className='border-t-2 border-white pl-3 w-60'>
                         <p className='font-itim pl-3 pr-3 pb-2'>Acesse os links: </p>
                             {github != "" ? (
                                <div>
                                    <a target="_blank" href={github}>
                                        <img src="/github.png" alt="Github" className="inline-block w-6 h-6 mr-2" />
                                        Github
                                    </a> 
                                    <br/>
                                </div>
                             ) : (null)}
                             {site === "https://gplink-aj6y.onrender.com/" ?  
                             <div>
                                <a target="_blank" href={site}>
                                    <img src="/iconeGPLINK 1.png" alt="Site" className="inline-block w-6 h-6 mr-2" />
                                    Site
                                </a>
                                <br />
                             </div> : null}
                             {instagram != "" ?
                                <div>
                                    <a target="_blank" href={instagram}>
                                        <img src="/instalogo.png" alt="Instagram" className="inline-block w-6 h-6 mr-2" />
                                        Instagram
                                    </a>
                                    <br />
                                </div> : null}
                         </div>
                    ) : (
                        null
                    )  }
                </div>
            </div>
        </div>
    );
    };
