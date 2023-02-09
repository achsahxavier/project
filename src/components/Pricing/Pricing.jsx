 import React from 'react'
 import { plansData } from '../../data/plansData'
 import whiteTick from '../../assets/whiteTick.png'
 import './Pricing.css'
 

const Pricing = () => {
    return (
        <div className="pricing-container" id="pricing">
            <div className="programs-header" style={{gap: '2rem'}}>
                <span>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span>WITH US</span>
            </div>

            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i) => (
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                                </div>
                        ))}
                    </div>

                    <div>
                        <span>See more benefits - </span>
                        </div>
                        <button className="btn">Join Now</button>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;