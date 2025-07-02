'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  return (
    <section className="bg-slate-600 py-16 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* First Stat */}
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-bold text-white mb-4">
              {inView && (
                <CountUp
                  start={0}
                  end={8}
                  duration={1.5}
                  delay={0.5}
                  suffix="+"
                  useEasing={true}
                  separator=","
                />
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
              Years Experience
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Providing compassionate and effective Individual and Couples Therapy
            </p>
          </div>

          {/* Second Stat */}
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-bold text-white mb-4">
              {inView && (
                <CountUp
                  start={0}
                  end={500}
                  duration={1.2}
                  delay={0.5}
                  suffix="+"
                  useEasing={true}
                  separator=","
                />
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
              Individual Client Sessions
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Helping individuals and couples heal, grow, and find purpose
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;