import { INTEGRATION_CARDS } from '@/constants/integration';

import React from "react";
import IntegrationCard from './_components/integration-card';

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex justify-center space-y-5 ">
      <div className='flex flex-col w-full lg:w-8/12 gap-y-5'>
      {INTEGRATION_CARDS.map((card, key) => (
        <IntegrationCard key={key} {...card} />
        
      ))}
      </div>
    </div>
  );
};

export default Page;
