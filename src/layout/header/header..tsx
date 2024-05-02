"use client";

import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SideMenu from '../sideMenu/sideMenu';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';



export default function Header() {

  const { data } = useSession();

  const handlePerfilClick = () => {
    signIn("google");
  };

  const handleLogoutClick = () => {
    signOut();
  };


  return (
    <header>
      <Card className='lg:rounded-none max-w-[1440px] 1xl:mx-auto'>
        <CardContent className='py-6 px-5 flex justify-between items-center
                lg:w-[90%] lg:mx-auto lg:px-0 lg:py-4 
                xl:py-5 xl:w-[82%]
                1xl:py-8 
                '>
          <Link href="/">
            <svg width="130" height="22" aria-label='Logo barber shop' viewBox="0 0 130 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.34 19.7721L25.3393 2.22442L30.1402 1.49966L32.9203 1.49984L32.9201 4.5649L28.4829 4.56461L28.4825 9.50736L32.92 7.27098L32.9197 10.695L28.4823 12.959L28.4823 20.396L25.34 19.7721Z" fill="white" />
              <path d="M34.4913 4.12319C34.4914 2.43879 35.4286 1.5 37.0271 1.5001L40.5273 1.50032C42.1258 1.50042 43.0904 2.43933 43.0902 4.12373L43.0902 4.59315L39.9206 6.24974L39.9207 4.53773L37.6332 4.53758L37.6329 9.36988L43.0901 6.55369L43.0894 18.0407C43.0893 19.7251 42.1246 20.6639 40.5261 20.6638L37.0259 20.6636C35.4273 20.6635 34.4903 19.7246 34.4904 18.0402L34.4906 16.2453L37.6326 14.6164L37.6324 17.6262L39.9199 17.6263L39.9203 11.6067L34.4907 14.4505L34.4913 4.12319Z" fill="white" />
              <path d="M53.9095 1.50117L53.9085 17.5996L56.196 17.5998L56.197 1.50132L59.3665 1.50152L59.3654 17.9866C59.3653 19.809 58.4833 20.665 56.6092 20.6648L54.1563 20.6647C53.0263 20.6646 52.3649 20.0019 52.365 18.8145C52.3649 20.0019 51.6759 20.6645 50.5459 20.6645L47.9 20.6643C46.3015 20.6642 45.3645 19.7253 45.3646 18.0409L45.3657 1.50063L48.5076 1.50083L48.5066 17.5993L50.8217 17.5994L50.8227 1.50098L53.9095 1.50117Z" fill="white" />
              <path d="M72.6796 8.3228L72.6798 4.45697L70.1442 4.45681L70.1439 9.56523L72.6796 8.3228ZM75.7111 10.4768L75.7106 18.0152C75.7105 19.8101 74.801 20.666 72.8993 20.6659L67.1115 20.6655L67.1128 1.50201L73.1485 1.50239C74.7471 1.50249 75.7116 2.4414 75.7115 4.1258L75.7113 8.15732C75.7112 9.39991 75.3253 10.1454 74.3607 10.4767L75.7111 10.4768ZM72.679 17.6837L72.6794 11.5259L70.1437 12.796L70.1434 17.6835L72.679 17.6837Z" fill="white" />
              <path d="M86.584 20.6667L83.4421 20.6666L83.4426 12.5483L81.1274 13.7355L81.127 20.6664L77.9851 20.6662L77.9861 4.12595C77.9862 2.44155 78.9234 1.50276 80.5219 1.50286L84.0221 1.50308C85.6206 1.50318 86.5852 2.44209 86.5851 4.12649L86.584 20.6667ZM83.4428 9.17949L83.4431 4.54049L81.128 4.54034L81.1277 10.3115L83.4428 9.17949Z" fill="white" />
              <path d="M94.3702 9.23541L94.3705 4.54118L92.0554 4.54103L92.055 10.395L94.3702 9.23541ZM97.512 11.0029L95.1968 12.1901L98.7792 20.6675L95.4995 20.6673L92.5234 13.5706L92.0548 13.819L92.0544 20.6671L88.9125 20.6669L88.9137 1.50339L94.9495 1.50378C96.548 1.50388 97.5125 2.44279 97.5124 4.12719L97.512 11.0029Z" fill="white" />
              <path d="M105.327 8.32488L105.327 4.45904L102.792 4.45888L102.791 9.56731L105.327 8.32488ZM108.359 10.4789L108.358 18.0173C108.358 19.8121 107.449 20.6681 105.547 20.668L99.7591 20.6676L99.7603 1.50408L105.796 1.50447C107.395 1.50457 108.359 2.44347 108.359 4.12787L108.359 8.15939C108.359 9.40198 107.973 10.1475 107.008 10.4788L108.359 10.4789ZM105.327 17.6857L105.327 11.528L102.791 12.798L102.791 17.6856L105.327 17.6857Z" fill="white" />
              <path d="M118.212 20.6688L110.633 20.6683L110.634 1.50477L118.213 1.50525L118.213 4.57031L113.776 4.57003L113.775 9.51278L118.213 7.27639L118.212 10.7004L113.775 12.9644L113.775 17.6034L118.212 17.6037L118.212 20.6688Z" fill="white" />
              <path d="M125.591 9.23739L125.592 4.54316L123.276 4.54302L123.276 10.397L125.591 9.23739ZM128.733 11.0048L126.418 12.1921L130 20.6695L126.721 20.6693L123.744 13.5725L123.276 13.821L123.275 20.6691L120.134 20.6689L120.135 1.50538L126.171 1.50576C127.769 1.50586 128.734 2.44477 128.733 4.12917L128.733 11.0048Z" fill="white" />
              <path d="M25.34 19.7721L25.3393 2.22442L30.1402 1.49966L32.9203 1.49984L32.9201 4.5649L28.4829 4.56461L28.4825 9.50736L32.92 7.27098L32.9197 10.695L28.4823 12.959L28.4823 20.396L25.34 19.7721Z" fill="#8162FF" />
              <path d="M34.4913 4.12319C34.4914 2.43879 35.4286 1.5 37.0271 1.5001L40.5273 1.50032C42.1258 1.50042 43.0904 2.43933 43.0902 4.12373L43.0902 4.59315L39.9206 6.24974L39.9207 4.53773L37.6332 4.53758L37.6329 9.36988L43.0901 6.55369L43.0894 18.0407C43.0893 19.7251 42.1246 20.6639 40.5261 20.6638L37.0259 20.6636C35.4273 20.6635 34.4903 19.7246 34.4904 18.0402L34.4906 16.2453L37.6326 14.6164L37.6324 17.6262L39.9199 17.6263L39.9203 11.6067L34.4907 14.4505L34.4913 4.12319Z" fill="#8162FF" />
              <path d="M53.9095 1.50117L53.9085 17.5996L56.196 17.5998L56.197 1.50132L59.3665 1.50152L59.3654 17.9866C59.3653 19.809 58.4833 20.665 56.6092 20.6648L54.1563 20.6647C53.0263 20.6646 52.3649 20.0019 52.365 18.8145C52.3649 20.0019 51.6759 20.6645 50.5459 20.6645L47.9 20.6643C46.3015 20.6642 45.3645 19.7253 45.3646 18.0409L45.3657 1.50063L48.5076 1.50083L48.5066 17.5993L50.8217 17.5994L50.8227 1.50098L53.9095 1.50117Z" fill="#8162FF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.81656 4.93415C1.8165 5.76273 2.14596 6.55739 2.73244 7.14331C3.31892 7.72924 4.11439 8.05844 4.94385 8.05849C5.77331 8.05855 6.56882 7.72945 7.15537 7.14359C7.74193 6.55774 8.07148 5.76313 8.07153 4.93455C8.07159 4.10598 7.74213 3.31132 7.15565 2.72539C6.56917 2.13947 5.77371 1.81027 4.94424 1.81021C4.11478 1.81016 3.31927 2.13926 2.73272 2.72511C2.14616 3.31096 1.81661 4.10558 1.81656 4.93415ZM4.94373 9.87251C3.88532 9.87232 2.8549 9.5328 2.00409 8.9039C1.15328 8.275 0.526999 7.38992 0.217387 6.37888C-0.0922245 5.36784 -0.0688178 4.28423 0.284164 3.28748C0.637145 2.29073 1.30106 1.43346 2.17824 0.841798C3.05541 0.25014 4.09953 -0.0446657 5.15697 0.000754538C6.21441 0.0461748 7.22934 0.429423 8.05243 1.09411C8.87553 1.7588 9.46333 2.66984 9.72936 3.69318C9.99538 4.71652 9.92559 5.79814 9.53024 6.7789L11.4753 8.07705C11.461 8.12249 11.4475 8.16818 11.4349 8.2141L11.1241 9.32265L10.4118 9.79828L8.40625 8.45981C7.51436 9.3325 6.29158 9.8726 4.94373 9.87251ZM1.81579 17.0578C1.81584 16.2293 2.14539 15.4346 2.73195 14.8488C3.3185 14.2629 4.11401 13.9338 4.94347 13.9339C5.77294 13.9339 6.5684 14.2631 7.15488 14.8491C7.74137 15.435 8.07082 16.2297 8.07076 17.0582C8.07071 17.8868 7.74116 18.6814 7.1546 19.2673C6.56805 19.8531 5.77254 20.1822 4.94308 20.1822C4.11362 20.1821 3.31815 19.8529 2.73167 19.267C2.14519 18.6811 1.81574 17.8864 1.81579 17.0578ZM4.94359 12.1199C3.8861 12.1199 2.8565 12.4587 2.00601 13.0865C1.15552 13.7143 0.528973 14.5979 0.218393 15.6077C-0.0921863 16.6175 -0.0704276 17.7001 0.280474 18.6966C0.631375 19.6931 1.29292 20.551 2.16795 21.1442C3.04298 21.7373 4.08536 22.0346 5.142 21.9922C6.19864 21.9499 7.21384 21.5702 8.03848 20.9089C8.86313 20.2476 9.45375 19.3396 9.72361 18.3182C9.99347 17.2968 9.92833 16.2159 9.53777 15.2342L30.1659 1.49644L28.2471 1.65448C25.5411 1.93874 22.9206 2.76678 20.5432 4.0888L14.3385 7.53504C14.1054 7.66505 13.9006 7.83994 13.7357 8.0496C13.5708 8.25925 13.4492 8.49949 13.3779 8.75642L12.8673 10.5825L8.42207 13.5512C7.49772 12.6333 6.24695 12.1186 4.94359 12.1199ZM14.3138 14.4686L14.338 14.4827L20.5423 17.9298C22.9195 19.2521 25.5399 20.0804 28.2459 20.3651L27.9688 19.003L25.3467 17.3579L17.6755 12.2215L14.3138 14.4686Z" fill="#8162FF" />
            </svg>
          </Link>

          <div className='hidden lg:flex gap-6 items-center '>
            <Link href="/bookings" className='px-4 py-2 flex gap-2 items-center'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6667 2.66669H3.33333C2.59695 2.66669 2 3.26364 2 4.00002V13.3334C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3334V4.00002C14 3.26364 13.403 2.66669 12.6667 2.66669Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.6667 1.33331V3.99998" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.33325 1.33331V3.99998" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 6.66669H14" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.33325 9.33331H5.33992" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 9.33331H8.00667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.6667 9.33331H10.6734" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.33325 12H5.33992" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 12H8.00667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.6667 12H10.6734" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className='text-sm font-bold'>Agendamentos</p>
            </Link>

            {!!data?.user ?
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="flex items-center gap-2"
                    //onClick={handleLogoutClick}
                    role='button'
                  >
                    <Avatar className='w-[36px] h-[36px]'>
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

          </div>

          <SideMenu />
        </CardContent>
      </Card>

    </header>
  );
}


/* 
<Button className='flex gap-2 items-center rounded-lg'
                onClick={handlePerfilClick}
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
              </Button> */