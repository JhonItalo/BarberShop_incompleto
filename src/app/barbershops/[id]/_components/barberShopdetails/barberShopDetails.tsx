import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Barbershop } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

interface props {
    barbershop: Barbershop
}

export default function BarberShopDetails({ barbershop }: props) {
    return (
        <Card className='h-fit flex-none '>
            <CardContent className='hidden w-[300px] p-3 pb-10 h-fit flex-col gap-5 
                    lg:flex
                    xl:w-[370px] xl:p-5
                    1xl:w-[390px]
                    '>
                <div className=" w-full p-5 h-[180px] relative ">
                    <Image src="/barbershop-map.png" fill alt={barbershop.name} />

                    <div className="w-full px-2 py-3 absolute bottom-2 left-0
                    xl:p-5 ">

                        <Card className='px-5 py-3 '>
                            <CardContent className="p-0 flex items-center gap-3                                                                                                    ">
                                <Avatar className='w-[48px] h-[48px]' >
                                    <AvatarImage src={barbershop.imageUrl} />
                                </Avatar>

                                <div>
                                    <h2 className="font-bold text-sm
                                    
                                    xl:text-base">{barbershop.name}</h2>
                                    <h3 className="text-xs overflow-hidden text-nowrap text-ellipsis
                                    xl:text-sm">{barbershop.address}</h3>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className='flex flex-col gap-2.5'>
                    <h3 className='font-bold text-sm uppercase'>sobre nós</h3>
                    <p className='text-sm text-[#838896]'>
                        Bem-vindo à {barbershop.name}, onde tradição encontra estilo. Nossa equipe de mestres barbeiros transforma cortes de cabelo e barbas em obras de arte. Em um ambiente acolhedor, promovemos confiança, estilo e uma comunidade unida.
                    </p>

                </div>

                <hr className='' />

                <div className='flex flex-col gap-2.5'>
                    <div className='flex justify-between items-center '>
                        <div className='flex items-center gap-2.5'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 2.00012H7C5.89543 2.00012 5 2.89555 5 4.00012V20.0001C5 21.1047 5.89543 22.0001 7 22.0001H17C18.1046 22.0001 19 21.1047 19 20.0001V4.00012C19 2.89555 18.1046 2.00012 17 2.00012Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 18.0001H12.01" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='text-sm'>(11) 98204-5108</p>


                        </div>
                        <Button variant="secondary">Copiar</Button>

                    </div>

                    <div className='flex justify-between items-center '>
                        <div className='flex items-center gap-2.5'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 2.00012H7C5.89543 2.00012 5 2.89555 5 4.00012V20.0001C5 21.1047 5.89543 22.0001 7 22.0001H17C18.1046 22.0001 19 21.1047 19 20.0001V4.00012C19 2.89555 18.1046 2.00012 17 2.00012Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 18.0001H12.01" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='text-sm'>(11) 99503-2351</p>


                        </div>
                        <Button variant="secondary">Copiar</Button>

                    </div>
                </div>

                <hr />

                <div className='w-full flex flex-col gap-2.5'>
                    <div className='flex justify-between items-center'>
                        <p className='text-sm text-[#838896] capitalize'>segunda</p>
                        <p className='text-sm capitalize'>fechado</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='text-sm text-[#838896] capitalize'>terça-feira</p>
                        <p className='text-sm   capitalize'>09:00 - 21:00</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='text-sm text-[#838896] capitalize'>quarta-feira</p>
                        <p className='text-sm   capitalize'>09:00 - 21:00</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='text-sm text-[#838896] capitalize'>quinta-feira</p>
                        <p className='text-sm   capitalize'>09:00 - 21:00</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='text-sm text-[#838896] capitalize'>sexta-feira</p>
                        <p className='text-sm   capitalize'>09:00 - 21:00</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='text-sm text-[#838896] capitalize'>sábado</p>
                        <p className='text-sm   capitalize'>08:00 - 17:00</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='text-sm text-[#838896] capitalize'>domingo</p>
                        <p className='text-sm   capitalize'>fechado</p>
                    </div>





                </div>

                <hr />


            </CardContent>
        </Card>

    )
}
