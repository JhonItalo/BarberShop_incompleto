"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'


import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';

export default function UserPerfil() {

  const { data } = useSession();


  const handlePerfilClick = () => {
    signIn("google");
  };

  const handleLogoutClick = () => {
    signOut();
  };

  return (
    <>
      {!!data?.user ?
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex items-center gap-2"
              //onClick={handleLogoutClick}
              role='button'
            >
              <Avatar className='w-[30px] h-[30px]
              xl:w-[33px] xl:h-[33px]
              1xl:w-[36px] 1xl:h-[36px]
              '>
                <AvatarImage src={data.user?.image ?? ""} />
              </Avatar>

              <h2 className="text-base font-bold capitalize"
              >{data.user.name}</h2>
            </div>
          </AlertDialogTrigger>

          <AlertDialogContent className="w-fit p-5 flex flex-col gap-5 items-center">

            <AlertDialogHeader>
              <AlertDialogTitle className='font-bold text-base text-center'>Sair</AlertDialogTitle>
              <AlertDialogDescription className='mt-2 text-sm text-center text-[#838896]'>
                Deseja sair da plataforma?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex-row gap-3">
              <AlertDialogCancel className="w-[136px]">Voltar</AlertDialogCancel>
              <AlertDialogAction className="w-[136px]" onClick={handleLogoutClick}>
                Confirmar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        :
        (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className='flex gap-2 items-center rounded-lg'

              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_16340_3663)">
                    <path d="M12 13.3333C12 12.2725 11.5786 11.2551 10.8284 10.5049C10.0783 9.75477 9.06087 9.33334 8 9.33334C6.93913 9.33334 5.92172 9.75477 5.17157 10.5049C4.42143 11.2551 4 12.2725 4 13.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.00004 9.33333C9.4728 9.33333 10.6667 8.13943 10.6667 6.66667C10.6667 5.19391 9.4728 4 8.00004 4C6.52728 4 5.33337 5.19391 5.33337 6.66667C5.33337 8.13943 6.52728 9.33333 8.00004 9.33333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8.00004 1.33334C4.31814 1.33334 1.33337 4.31811 1.33337 8.00001C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_16340_3663">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className='text-sm font-bold'>Perfil</p>
              </Button>

            </AlertDialogTrigger>

            <AlertDialogContent className="w-fit p-5 flex flex-col gap-5 items-center">

              <AlertDialogHeader>
                <AlertDialogTitle className='font-bold text-base text-center'>faça login na plataforma</AlertDialogTitle>
                <AlertDialogDescription className='mt-2 text-sm text-center text-[#838896]'>
                  Conecte-se usando sua conta do Google ou Github.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex-row gap-3">
                <AlertDialogCancel className="w-[136px]">Voltar</AlertDialogCancel>
                <AlertDialogAction className="w-[136px] text-sm flex items-center gap-2" onClick={handlePerfilClick}>
                  <svg width="16" height="17" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.76 3.93574C1.35429 2.75234 2.26598 1.75753 3.39317 1.0625C4.52035 0.367471 5.81862 -0.000393946 7.14286 2.32426e-05C9.06786 2.32426e-05 10.685 0.70788 11.9214 1.86074L9.87357 3.90931C9.13286 3.20145 8.19143 2.84074 7.14286 2.84074C5.28214 2.84074 3.70714 4.09788 3.14643 5.78574C3.00357 6.21431 2.92214 6.67145 2.92214 7.14288C2.92214 7.61431 3.00357 8.07145 3.14643 8.50002C3.70786 10.1886 5.28214 11.445 7.14286 11.445C8.10357 11.445 8.92143 11.1915 9.56143 10.7629C9.93246 10.5186 10.2501 10.2016 10.4951 9.83109C10.7402 9.46057 10.9076 9.04421 10.9871 8.60717H7.14286V5.84431H13.87C13.9543 6.31145 14 6.7986 14 7.30502C14 9.48074 13.2214 11.3122 11.87 12.555C10.6886 13.6465 9.07143 14.2857 7.14286 14.2857C6.20474 14.2861 5.27574 14.1016 4.40896 13.7428C3.54218 13.384 2.75461 12.8578 2.09126 12.1945C1.42791 11.5311 0.901783 10.7436 0.542953 9.87678C0.184124 9.01 -0.000374901 8.081 5.71939e-07 7.14288C5.71939e-07 5.99002 0.275715 4.90002 0.76 3.93574Z" fill="white" />
                  </svg>

                  Google
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}


    </>
  )
}
