import React, {useRef, useEffect } from 'react'
import PlanItem from './PlanItem'

const Plans = () => {
    const plan = useRef(null)
    useEffect(() => {
       const Tl = gsap.timeline({
            scrollTrigger: {
                // markers: true,
                trigger: plan.current,
                start: 'top 100px',
                end : 'bottom center-=100px',
                toggleActions: 'restart none none reverse'
            }
        })

        Tl.from('.plans__header > *', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3',
            stagger: 0.2
        })
        .from('.item', {
            delay: -0.6,
            opacity: 0,
            x: 50,
            ease: 'elastic.inOut',
            duration: 1.2,
            stagger: 0.2
        })
    }, [])
    return (
        <section className='plans' ref={plan}>
            <div className="plans__header">
                <h2>
                    Escoge el plan que mejor se ajuste a ti.
                </h2>
                <p>
                    Cualquier plan te da acceso completo a nuestra plataforma.
                </p>
            </div>

            <div className="plans__carousel">
                <div className="plans__container">
                    <PlanItem title='Pago Anual' price='5'>
                        *Plan básico para mantenerte informado
                    </PlanItem>
                    <PlanItem title='Pago Anual' price='49' best>
                        *Ahorras $129 comparado al plan mensual.
                    </PlanItem>
                    <PlanItem title='Acceso de por vida' price='99'>
                        *Ahorras $999+ comparado al plan anual.
                    </PlanItem>
                </div>
            </div>
        </section>
    )
}

export default Plans
