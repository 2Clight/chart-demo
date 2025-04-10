import React from 'react';
import Header from '../components/common/Header';
import { motion } from 'framer-motion';
import {BarChart2, ShoppingBag, Users, Zap } from 'lucide-react';
import StatCard from '../components/common/StatCard';
import SalesOverviewChart from '../components/overview/SalesOverviewChart';

const OverviewPage = () => {
  return (
    <div className="flex flex-col flex-1 h-full overflow-auto relative z-10">
      <Header title="Overview" />
      

      <main className='max-w-7xl  py-6 px-4 lg:px-8'>
       <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.3 }}
       
       >
          <StatCard name="Total Sales" icon={Zap} value='1,234' color='#6366F1' ></StatCard>
          <StatCard name="Total Sales" icon={Users} value='1,234' color='#6366F1' ></StatCard>
          <StatCard name="Total Sales" icon={ShoppingBag} value='1,234' color='#6366F1' ></StatCard>
          <StatCard name="Total Sales" icon={BarChart2} value='12.5%' color='#634444' ></StatCard>

       </motion.div>
            
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <SalesOverviewChart/>

        </div>

      </main>
    </div>
  );
};

export default OverviewPage;
