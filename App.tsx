import React from 'react';
import Accordion from './components/Accordion';
import { BLOG_ARTICLES, PUBLISHED_BOOKS, RECOMMENDED_RESOURCES } from './constants';

const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const PenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" />
    </svg>
);

const StarIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);


function App() {
  return (
    <div className="font-sans min-h-screen bg-slate-50 text-brand-gray-text">
      <header>
        {/* El usuario reemplazará esto con su banner. Se usa un placeholder. */}
        <img 
            src="https://picsum.photos/1200/400?grayscale" 
            alt="Banner de EntrePalabrasUrgentes" 
            className="w-full h-48 md:h-64 object-cover"
        />
      </header>
      
      <main className="container mx-auto p-4 md:p-8">
        <h1 className="text-24px font-bold uppercase text-center text-white bg-brand-purple-dark p-4 rounded-md shadow-lg -mt-12 md:-mt-16 z-10 relative">
          Explora, Conecta y Transforma
        </h1>

        <section className="mt-8 space-y-8 max-w-4xl mx-auto">
            <div className="bg-brand-gray-bg p-6 rounded-lg shadow-md">
                 <p className="text-12px text-brand-blue-text leading-1.5">
                    En esta sección de Entre Palabras Urgentes te invitamos a descubrir un espacio diseñado para tu crecimiento personal y bienestar emocional. A través de tres sub-secciones interactivas, podrás acceder fácilmente a:
                </p>
            </div>
            
            <div className="bg-brand-pink-pastel p-6 rounded-lg shadow-md">
                 <p className="text-12px text-brand-gray-text leading-1.5">
                    <strong>Nuestro Blog:</strong> Un listado completo de todos los artículos publicados, con acceso directo a cada uno de ellos.
                    <br/>
                    <strong>Publicaciones de Autor:</strong> Información sobre mis libros publicados, fragmentos descargables en PDF y novedades sobre futuras obras.
                    <br/>
                    <strong>Lecturas y Recursos Recomendados:</strong> Artículos, investigaciones, videos y más, con consejos y tendencias para fortalecer tu salud emocional.
                    <br/><br/>
                    Haz clic en los botones desplegables del centro de esta página y comienza tu recorrido hacia una vida más consciente, conectada y equilibrada.
                </p>
            </div>
        </section>

        <section className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Card de Artículos */}
                <Accordion 
                    title="Nuestro Blog" 
                    icon={<PenIcon />}
                    headerClassName="bg-brand-blue-dark"
                    titleClassName="text-12px"
                >
                   <ul className="space-y-2">
                       {BLOG_ARTICLES.map((article, index) => (
                           <li key={index}>
                               {/* Reemplaza '#' con el enlace real al artículo */}
                               <a href={article.href} className="flex items-center text-white hover:text-brand-pink-pastel transition-colors duration-300 text-sm">
                                   <span className="mr-3 text-lg">{article.icon}</span>
                                   <span>{article.title}</span>
                               </a>
                           </li>
                       ))}
                   </ul>
                </Accordion>

                {/* Card de Libros */}
                <Accordion 
                    title="Libros Publicados" 
                    icon={<BookIcon />}
                    headerClassName="bg-brand-purple-dark"
                    titleClassName="text-14px"
                >
                    <ul className="space-y-3">
                       {PUBLISHED_BOOKS.map((book, index) => (
                           <li key={index}>
                               {/* Reemplaza '#' con el enlace real al libro */}
                               <a href={book.href} className="flex items-center text-white hover:text-brand-pink-pastel transition-colors duration-300 text-sm">
                                   <span className="mr-3 text-lg">{book.icon}</span>
                                   <span>{book.title}</span>
                               </a>
                           </li>
                       ))}
                   </ul>
                </Accordion>
                
                {/* Card de Recursos */}
                <Accordion 
                    title="Contenido Recomendado" 
                    icon={<StarIcon />}
                    headerClassName="bg-brand-blue-dark"
                    titleClassName="text-12px"
                >
                    <ul className="space-y-2">
                       {RECOMMENDED_RESOURCES.map((resource, index) => (
                           <li key={index}>
                               {/* Reemplaza '#' con el enlace real al recurso externo */}
                               <a href={resource.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-brand-pink-pastel transition-colors duration-300 text-sm">
                                   <span className="mr-3 text-lg">{resource.icon}</span>
                                   <span>{resource.title}</span>
                               </a>
                           </li>
                       ))}
                   </ul>
                </Accordion>
            </div>
        </section>
        
        <footer className="text-center text-gray-500 mt-12 pb-4">
            <p>&copy; {new Date().getFullYear()} EntrePalabrasUrgentes. Todos los derechos reservados.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;