import React, { useEffect, useRef, useState } from 'react';

function SectionReveal({ children, delay = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const node = sectionRef.current;

        if (!node) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`section-reveal ${isVisible ? 'section-reveal--visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </section>
    );
}

export default SectionReveal;
