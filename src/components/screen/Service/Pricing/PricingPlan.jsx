import React, { useState } from 'react'
import SectionHeader from '../../../shared/SectionHeader/SectionHeader'
import './PricingPlan.css'
import Plan from './Plan';
import cn from '../../../../utils/cn';
const PricingPlan = ({className}) => {
    const [monthly, setMonthly] = useState(true);


    // monthly 
    const plans = [
        {
            plan: 'Basic Plan',
            price: '$19',
            perMember: 'Per Member, Per Month',
            features: [
                'App development access',
                'Unlimited email users',
                '15-Day free support',
                '15GB-Data uses'
            ],
        },
        {
            plan: 'Standard Plan',
            price: '$29',
            perMember: 'Per Member, Per Month',
            features: [
                'App development access',
                'Unlimited email users',
                '30-Day free support',
                '30GB-Data uses'
            ],
        },
        {
            plan: 'Premium Plan',
            price: '$49',
            perMember: 'Per Member, Per Month',
            features: [
                'App development access',
                'Unlimited email users',
                'Priority support',
                '50GB-Data uses'
            ],
        },
        {
            plan: 'Enterprise Plan',
            price: '$99',
            perMember: 'Per Member, Per Month',
            features: [
                'App development access',
                'Unlimited email users',
                '24/7 Premium support',
                '100GB-Data uses'
            ],
        },
    ];

    // Yearly 
    const yearlyPlans = [
        {
            plan: 'Basic Plan',
            price: '$199',
            perMember: 'Per Member, Per Year',
            features: [
                'App development access',
                'Unlimited email users',
                '15-Day free support',
                '15GB-Data uses',
                'Annual payment discount',
            ],
        },
        {
            plan: 'Standard Plan',
            price: '$299',
            perMember: 'Per Member, Per Year',
            features: [
                'App development access',
                'Unlimited email users',
                '30-Day free support',
                '30GB-Data uses',
                'Annual payment discount',
            ],
        },
        {
            plan: 'Premium Plan',
            price: '$499',
            perMember: 'Per Member, Per Year',
            features: [
                'App development access',
                'Unlimited email users',
                'Priority support',
                '50GB-Data uses',
                'Annual payment discount',
            ],
        },
        {
            plan: 'Enterprise Plan',
            price: '$999',
            perMember: 'Per Member, Per Year',
            features: [
                'App development access',
                'Unlimited email users',
                '24/7 Premium support',
                '100GB-Data uses',
                'Annual payment discount',
            ],
        },
    ];
    return (
        <section className={cn("py-12",className)}>
            <div className="container_fluid">
                <div className="w-full md:w-[500px] lg:w-[700px] mx-auto text-center">
                    <SectionHeader className={"text-center"} lineClass={"right-[35%]"} header={"Our Pricing Plans are Designed for Your Business"} subHeader={"Pricing Plan"} />
                    <p className='para pt-5'>Until recently, the prevailing view assumed lorem ipsum was born</p>
                </div>
                <div className="mt-12">
                    <div className="flex justify-center items-center pb-10">
                        <div className="inline-flex items-center gap-5 px-4 py-2 border rounded-3xl">
                            <span>Monthly</span>
                            <div class="toggle-switch">
                                <input onClick={() => setMonthly(!monthly)} class="toggle-input" id="toggle" type="checkbox" />
                                <label class="toggle-label" for="toggle"></label>
                            </div>
                            <span>Yearly</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-7 lg:gap-4 xl:gap-8">
                        {monthly ?
                            plans.map((plan, i) => <Plan key={i} plan={plan} />) :
                            yearlyPlans.map((plan, i) => <Plan key={i} plan={plan} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingPlan
