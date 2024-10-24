"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [

];

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted && (
                <header className="shadow-inner backdrop-blur-3xl bg-black/40 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-gray-900/45 z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
                    <Link href="/" className="font-bold text-lg flex items-center">
                        Inohax 1.0
                    </Link>
                    {/* Mobile Menu */}
                    <div className="flex items-center lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Menu
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="cursor-pointer lg:hidden"
                                />
                            </SheetTrigger>

                            <SheetContent
                                side="left"
                                className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
                            >
                                <SheetClose asChild>
                                    <div>
                                        <SheetHeader className="mb-4 ml-4">
                                            <SheetTitle className="flex items-center">
                                                <Link href="/" className="flex items-center">
                                                    Inohax 1.0
                                                </Link>
                                            </SheetTitle>
                                        </SheetHeader>

                                        <div className="flex flex-col gap-2">
                                            {routeList.map(({ href, label }) => (
                                                <Button
                                                    key={href}
                                                    onClick={() => setIsOpen(false)}
                                                    asChild
                                                    className="justify-start text-base"
                                                >
                                                    <Link href={href} className="w-full text-left">
                                                        {label}
                                                    </Link>
                                                </Button>
                                            ))}
                                        </div>
                                    </div>

                                    <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                                        <Separator className="mb-2" />
                                    </SheetFooter>
                                </SheetClose>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex">
                        <h1>inovact</h1>
                    </div>
                </header>
            )}
        </>
    );
};
