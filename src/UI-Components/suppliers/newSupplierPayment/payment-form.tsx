import {Input} from "@/UI-Components/sharedComponents/input";
import {Button} from "@/UI-Components/sharedComponents/button";

const PaymentForm =() => {
    return (
        <div className='w-full' >
                <div className='w-full flex flex-col md:flex-row items-center gap-4 mb-4'>
                    <div className='w-full bg-gray-50 flex flex-col  p-4 rounded-lg'>

                            <span className='my-4'>Ramli Balance</span>

                        <div className='flex  items-center mb-4 gap-x-4'>
                            <Input label='18K' className='flex-grow w-full mr-4 '/>
                            <span>Ramli</span>
                        </div>
                        <div className='flex  items-center mb-4 gap-x-4'>
                            <Input label='21K' className='flex-grow w-full mr-4'/>
                            <span>Ramli</span>
                        </div>
                        <div className='flex  items-center mb-4'>
                            <Input className='flex-grow w-full ' label='24K'/>
                        </div>
                        <div className='flex  items-center mb-4 '>
                            <Input className='flex-grow w-full ' label='Silver'/>
                        </div>
                        <div className='flex  items-center gap-x-4'>
                            <Input label='Cash' className='flex-grow w-full '/>
                            <Input label='Ramli' className='flex-grow w-full'/>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <span>ToTal Ramli</span>
                            <span>Ramli Final Balance</span>
                        </div>
                    </div>


                    <div className='w-full bg-gray-50 flex flex-col p-4 rounded-lg'>

                            <span className='my-4'>Cash Balance</span>
                        <div className='flex  items-center'>
                            <Input label='Cash Payment' className='flex-grow w-full '/>
                        </div>
                            <span className='my-4'>Cash Final Balance Balance</span>
                    </div>
                </div>
                        <div className='flex justify-center md:justify-end'>
                        <Button className='text-white'>Add Payment</Button>
                        </div>
        </div>
    )
}

export default PaymentForm