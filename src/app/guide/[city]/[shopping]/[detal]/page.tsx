import GuideDetal from '@/components/pages/guideDetal-page/guideDetal-page';
import { getGuidDetal } from '@/utils/fetches';
import { montserrat } from "../../../../fonts";
import React from 'react';


export default async function shopping() {
    const data = await getGuidDetal('dubai', 'shopping1', 'detal1');
    return (
        <div className={`${montserrat.variable}`}>
        <GuideDetal data={data} />
        </div>
    );
}