'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, LineChart } from '@/components/dashboard/charts';
import MapComponent from '@/components/dashboard/map/map';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/AppContext';
import { useState } from 'react';
import Filters from '@/components/dashboard/filters';
import Modal from '@/components/dashboard/modal';


export default function AnalyticsPage() {

const [input,setInput] = useState('')
const {data,setData,resetData} = useAppContext()
const handleSearch = ()=>{

  if(input){
    

  const searchData = data.filter((issue:any)=>{
    if(issue.city.toLowerCase().includes(input.toLowerCase()) || issue.state.toLowerCase().includes(input.toLowerCase()) ){
      return issue
    }
  })
  setData(searchData)
}else{
  resetData()
}
 
}

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Issue Map</h1>

      <div className=" gap-6 md:grid-cols-2">
       

        <div className="w-full">
          <div className="flex items-center justify-center mb-7">
       
        <Label className='flex-2'>Search by location name :</Label>
         <Input onChange={(e)=>setInput(e.target.value)} className='flex-1 m-2'/>
         <Button onClick={handleSearch}>Search</Button>
         <Modal Component={ Filters}/>
          </div>
        <MapComponent/>
        </div>
      </div>
    </div>
  );
}