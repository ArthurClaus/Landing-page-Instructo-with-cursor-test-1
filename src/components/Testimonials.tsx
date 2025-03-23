import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sophie Martin',
      role: 'Étudiante en médecine',
      image: '/testimonial-1.jpg',
      quote: 'Instructo m\'a aidée à comprendre des concepts complexes d\'anatomie que je n\'arrivais pas à assimiler en cours. Les explications sont claires et adaptées à mon niveau. C\'est comme avoir un professeur particulier disponible 24h/24 !',
      rating: 5
    },
    {
      id: 2,
      name: 'Thomas Dubois',
      role: 'Lycéen en terminale',
      image: '/testimonial-2.jpg',
      quote: 'Grâce à Instructo, j\'ai pu rattraper mon retard en mathématiques et physique. L\'IA s\'adapte parfaitement à mon rythme et me propose des exercices qui correspondent exactement à mes besoins.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Leroy',
      role: 'Professeure des écoles',
      image: '/testimonial-3.jpg',
      quote: 'J\'utilise Instructo pour préparer mes cours et trouver des façons innovantes d\'expliquer des concepts à mes élèves. C\'est un outil incroyable qui m\'aide à être une meilleure enseignante.',
      rating: 4
    },
    {
      id: 4,
      name: 'Lucas Bernard',
      role: 'Étudiant en informatique',
      image: '/testimonial-4.jpg',
      quote: 'La façon dont Instructo m\'explique les concepts de programmation est incroyable. Il me donne des exemples concrets et m\'aide à déboguer mon code. Je recommande à tous les étudiants en informatique !',
      rating: 5
    },
    {
      id: 5,
      name: 'Camille Petit',
      role: 'En reconversion professionnelle',
      image: '/testimonial-5.jpg',
      quote: 'Je me forme à un nouveau métier et Instructo est mon compagnon d\'apprentissage au quotidien. Il m\'aide à structurer mes connaissances et à rester motivée.',
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Témoignages</span>
          <h2 className="section-title">Ce que nos utilisateurs disent</h2>
          <p className="section-description">
            Découvrez comment Instructo aide des milliers d'étudiants et de professionnels à atteindre leurs objectifs d'apprentissage.
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonials-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star ${i < testimonial.rating ? 'filled' : ''}`}>★</span>
                    ))}
                  </div>
                  <blockquote className="testimonial-quote">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control prev" onClick={prevTestimonial} aria-label="Témoignage précédent">
            &#10094;
          </button>
          <button className="carousel-control next" onClick={nextTestimonial} aria-label="Témoignage suivant">
            &#10095;
          </button>

          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Utilisateurs actifs</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.8/5</span>
            <span className="stat-label">Note moyenne</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">Taux de satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 