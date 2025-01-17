"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";


const SideMenu = () => {
    const { data } = useSession();

    const [sheetIsOpen, setSheetIsOpen] = useState(false);

    const handleClickLogout = () => signOut();

    const handleClickLogin = () => signIn("google");

    return (
        <>
            <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen} >
                <SheetTrigger asChild>
                    <Button className='lg:hidden' variant="outline" size="icon">
                        <MenuIcon size={16} />
                    </Button>
                </SheetTrigger>

                <SheetContent className="p-0">
                    <SheetHeader className="text-left border-b border-solid border-secondary p-5">
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>

                    {data?.user ? (
                        <div className="flex justify-between px-5 py-6 items-center">
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src={data.user?.image ?? ""} />
                                </Avatar>

                                <h2 className="font-bold">{data.user.name}</h2>
                            </div>

                            <Button variant="secondary" size="icon">
                                <LogOutIcon onClick={handleClickLogout} />
                            </Button>
                        </div>
                    ) : (
                        <div className="flex flex-col px-5 py-6 gap-3">
                            <div className="flex items-center gap-2">
                                <UserIcon size={32} />
                                <h2 className="font-bold">Olá, faça seu login!</h2>
                            </div>
                            <Button variant="secondary" className="w-full justify-start" onClick={handleClickLogin}>
                                <LogInIcon className="mr-2" size={18} />
                                Fazer Login
                            </Button>
                        </div>
                    )}

                    <div className="flex flex-col gap-3 px-5">
                        <Button variant="outline" className="justify-start" asChild onClick={() => setSheetIsOpen(false)}>
                            <Link href="/">
                                <HomeIcon size={18} className="mr-2" />
                                Início
                            </Link>
                        </Button>

                        {data?.user && (
                            <Button variant="outline" className="justify-start" asChild onClick={() => setSheetIsOpen(false)}>
                                <Link href="/bookings">
                                    <CalendarIcon size={18} className="mr-2" />
                                    Agendamentos
                                </Link>
                            </Button>
                        )}
                    </div>
                </SheetContent>
            </Sheet>

        </>
    );
};

export default SideMenu;