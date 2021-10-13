import phoneImg from './images/phone.svg';

import { useGlobalContext } from './Context';

const Hero = () => {
  const { toggleSubmenuOpen } = useGlobalContext();

  return (
    <section className="hero">
      <section className="hero-center">
        <article className="hero-info">
          <h1>Infraestrutura de pagamentos para a internet</h1>

          <p>
            Milhões de empresas de todos os tamanhos, de pequenas startups a
            grandes corporações, usam soluções de software e API da Stripe para
            receber pagamentos, enviar repasses e gerenciar suas operações
            online.{' '}
          </p>

          <button type="button" className="btn">
            Comece agora
          </button>
        </article>

        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </section>
    </section>
  );
};

export default Hero;
