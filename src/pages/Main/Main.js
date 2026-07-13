import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Education, Experience, Contacts, Projects, Services, Achievement, Testimonials, SectionReveal } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />
            <SectionReveal delay={0}><Landing /></SectionReveal>
            <SectionReveal delay={50}><About /></SectionReveal>
            <SectionReveal delay={100}><Education /></SectionReveal>
            <SectionReveal delay={150}><Skills /></SectionReveal>
            <SectionReveal delay={200}><Experience /></SectionReveal>
            <SectionReveal delay={250}><Achievement /></SectionReveal>
            <SectionReveal delay={300}><Services /></SectionReveal>
            <SectionReveal delay={350}><Projects /></SectionReveal>
            <SectionReveal delay={400}><Testimonials /></SectionReveal>
            {/* <Blog /> */}
            <SectionReveal delay={450}><Contacts /></SectionReveal>
            <Footer />
        </div>
    )
}

export default Main
