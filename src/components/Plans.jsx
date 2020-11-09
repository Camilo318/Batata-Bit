import React from 'react'
import PlanItem from './PlanItem'

const Plans = () => {
    return (
        <section className='plans'>
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
