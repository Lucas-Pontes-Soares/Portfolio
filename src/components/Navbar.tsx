import React, { useState, useEffect } from 'react';

interface Props {
  page: string;
}

export const Navbar: React.FC<Props> = ({ page }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isLocalHost = false;

  return (
    <div className={`flex fixed w-full content-start flex-wrap text-slate-50 bg-neutral-900 bg-opacity-70 z-20`}>
      {!isMobile && (
        <>
          <div className="flex-1 h-16 flex items-center justify-center text-2xl font-itim hover:text-amber-300">
            {page === 'sobre-mim' ? (
              <a className="text-amber-300">
                Sobre Mim
              </a>
            ) : (
              isLocalHost ? (
                <a href="http://localhost:5173/SobreMim">Sobre Mim</a>
              ) : (
                <a href="https://portfolio-b5wg.onrender.com/SobreMim">Sobre Mim</a>
              )
            )}
          </div>
          <div className="flex-1 h-16 flex items-center justify-center text-2xl font-itim hover:text-amber-300">
            {page === 'habilidades' ? (
              <a className="text-amber-300">
                Habilidades
              </a>
            ) : (
              isLocalHost ? (
                <a href="http://localhost:5173/Habilidades">Habilidades</a>
              ) : (
                <a href="https://portfolio-b5wg.onrender.com/Habilidades">Habilidades</a>
              )
            )}
          </div>
          <div className="flex-1 h-16 flex items-center justify-center">
            <img src="/timonIcon.png" alt="Timon" height="70px" width="70px" />
          </div>
          <div className="flex-1 h-16 flex items-center justify-center text-2xl font-itim hover:text-amber-300">
            {page === 'projetos' ? (
              <a className="text-amber-300">
                Projetos
              </a>
            ) : (
              isLocalHost ? (
                <a href="http://localhost:5173/Projetos">Projetos</a>
              ) : (
                <a href="https://portfolio-b5wg.onrender.com/Projetos">Projetos</a>
              )
            )}
          </div>
          <div className="flex-1 h-16 flex items-center justify-center text-2xl font-itim hover:text-amber-300">
            {page === 'contato' ? (
              <a className="text-amber-300">
                Contato
              </a>
            ) : (
              isLocalHost ? (
                <a href="http://localhost:5173/Contato">Contato</a>
              ) : (
                <a href="https://portfolio-b5wg.onrender.com/Projetos">Contato</a>
              )
            )}
          </div>
        </>
      )}
      {isMobile && (
        <>
        <div className='flex content-center w-full'>
        <div className="flex-1 h-16 flex items-center justify-center text-white text-2xl font-itim">
            <p>Portfolio</p>
          </div>
          <div className="flex-1 h-16 flex items-center justify-center">
            <img src="/timonIcon.png" alt="Timon" height="70px" width="70px" />
          </div>
          <div className="flex-1 h-16 flex items-center justify-center md:hidden">
            <button className="text-white text-2xl font-itim hover:text-amber-300" onClick={toggleMenu}>Menu</button>
          </div>
        </div>
          {menuOpen && (
            <div className="md:hidden w-full">
              <div className="text-white text-2xl font-itim hover:text-amber-300">
                  {page === 'sobre-mim' ? (
                  <a className="text-amber-300">
                    Sobre Mim
                  </a>
                ) : (
                  isLocalHost ? (
                    <a href="http://localhost:5173/SobreMim">Sobre mim</a>
                  ) : (
                    <a href="https://portfolio-b5wg.onrender.com/SobreMim">Sobre mim</a>
                  )
                )}
              </div>
              <div className="text-white text-2xl font-itim hover:text-amber-300">
                {page === 'habilidades' ? (
                  <a className="text-amber-300">
                    Habilidades
                  </a>
                ) : (
                  isLocalHost ? (
                    <a href="http://localhost:5173/Habilidades">Habilidades</a>
                  ) : (
                    <a href="https://portfolio-b5wg.onrender.com/Habilidades">Habilidades</a>
                  )
                )}
              </div>
              <div className="text-white text-2xl font-itim hover:text-amber-300">
                {page === 'projetos' ? (
                  <a className="text-amber-300">
                    Projetos
                  </a>
                ) : (
                  isLocalHost ? (
                    <a href="http://localhost:5173/Projetos">Projetos</a>
                  ) : (
                    <a href="https://portfolio-b5wg.onrender.com/Projetos">Projetos</a>
                  )
                )}
              </div>
              <div className="text-white text-2xl font-itim hover:text-amber-300">
                {page === 'contato' ? (
                  <a className="text-amber-300">
                    Contato
                  </a>
                ) : (
                  isLocalHost ? (
                    <a href="http://localhost:5173/Contato">Contato</a>
                  ) : (
                    <a href="https://portfolio-b5wg.onrender.com/Contato">Contato</a>
                  )
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
